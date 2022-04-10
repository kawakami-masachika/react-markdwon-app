import * as React from 'react';
import styled from "styled-components";
import { putMemo } from '../indexeddb/memos';
import { Button } from './button';
import { useState } from "react";


const ModalWrapper = styled.div`
  align-items: center;
  background-color: #0002;
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
`;

const Modal = styled.div`
  background: #fff;
  padding: 1rem;
  width: 32rem;
`
const TitleInput = styled.input`
  width: 29rem;
  padding: 0.5rem;
`
const Control = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 1rem;
`
type Props = {
  onClickSave: (title: string) => void;
  onClickCancel: () => void;
}


export const ConfirmModal: React.FC<Props> = (props) => {
  const [title, setTitle] = useState(new Date().toISOString());

  return (
    <ModalWrapper>
      <Modal>
        <p>テキストの内容を保存します。</p>
        <p>保存内容のタイトルを入力して「保存」ボタンを押してください。</p>
        <p>
          <TitleInput
            type="text"
            onChange={(event) => setTitle(event.target.value)}
            value={title}
          ></TitleInput>
        </p>
        <Control>
          <Button onClick={() => props.onClickSave(title)}>保存</Button>
          <Button onClick={props.onClickCancel} cancel={true}>
            キャンセル
          </Button>
        </Control>
      </Modal>
    </ModalWrapper>
  );
}