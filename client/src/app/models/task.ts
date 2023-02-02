export interface ITask {
  id: string;
  title: string;
  description?: string;
  done: boolean;
  deadLine?: string;
  createdAt: string;
  updatedAt?: string;
  category?: string;
}
