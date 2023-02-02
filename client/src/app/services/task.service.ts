import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITask } from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}

  public get(): Observable<ITask[]> {
    return this.http.get<ITask[]>(`http://localhost:3030/tasks`);
  }

  public create(task: ITask): Observable<ITask> {
    return this.http.post<ITask>(`http://localhost:3030/tasks`, task);
  }
  public delete(id: string): Observable<string> {
    return this.http.delete<string>(`http://localhost:3030/tasks/${id}`);
  }
}

