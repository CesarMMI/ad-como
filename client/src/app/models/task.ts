import { ICategory } from "./category";

export interface ITask {
  id: string;
  title: string;
  description?: string;
  state: number;
  deadLine?: string;
  createdAt: string;
  updatedAt?: string;
  category?: ICategory;
}
