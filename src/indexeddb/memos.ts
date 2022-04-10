import Dexie from "dexie";

export interface MemoRecord {
  dateTime: string;
  title: string;
  bodyText: string;
}

const dataBase = new Dexie('markdown-db')
dataBase.version(1).stores({ memos: '&dateTime' });
const memos: Dexie.Table<MemoRecord, string> = dataBase.table('memos');

export const putMemo = async (title: string, bodyText: string): Promise<void> => {
  const dateTime = new Date().toISOString()
  console.log(dateTime);
  await memos.put({ dateTime, title, bodyText }, "dateTime");
}