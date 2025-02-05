export interface INote {
  id: number;
  createdAt: string;
  note: string;
}

export interface IGetNoteByUser {
  userId: string;
  page: number;
  keyword: string;
}
