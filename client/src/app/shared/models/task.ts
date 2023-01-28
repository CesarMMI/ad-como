import { ICategory } from "./category";

export interface ITask {
    id: string;
    title: string;
    description?: string;
    done: false;
    deadLine?: Date;
    createdAt: Date;
    updatedAt?: Date;
    category?: ICategory
}
