export interface INote {
  id: number;
  createdAt: string;
  note: string;
}

export interface IViewNote {
  notes: INote[];
  size: number;
}

export interface IGetNoteByUser {
  userId: string;
  size: number;
  keyword: string;
}
