export type Task = {
  id: number;
  columnId: string;
  title: string;
  level: number;
  progress: number;
};
export type Column = {
  id: string | number;
  title: string;
};
