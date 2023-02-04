import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, first, Observable, tap } from 'rxjs';
import { ITask } from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient, private _snackBar: MatSnackBar) {
    if (this.tasks$.value.length <= 0) this.refresh();
  }

  private tasks$ = new BehaviorSubject<ITask[]>([]);
  private selectedTask$ = new BehaviorSubject<ITask | undefined>(undefined);

  private refresh() {
    this.http
      .get<ITask[]>(`http://localhost:3030/tasks`)
      .pipe(first())
      .subscribe({
        next: (response) => {
          this.tasks$.next(response);
        },
      });
  }

  private showSnack(message: string): void {
    this._snackBar.open(message, 'OK', { duration: 3000 });
  }

  public select(task?: ITask) {
    this.selectedTask$.next(task);
  }

  public getSelected(): Observable<ITask | undefined> {
    return this.selectedTask$.asObservable();
  }

  public get(): Observable<ITask[]> {
    return this.tasks$.asObservable();
  }

  public create(task: ITask): Observable<ITask> {
    return this.http.post<ITask>(`http://localhost:3030/tasks`, task).pipe(
      first(),
      tap((response) => {
        this.showSnack('Task created');
        this.tasks$.next([...this.tasks$.value, response]);
      })
    );
  }

  public update(task: ITask, notify: boolean = true): Observable<ITask> {
    return this.http
      .put<ITask>(`http://localhost:3030/tasks/${task.id}`, {
        ...task,
        categoryId: task.category?.id ?? null,
      })
      .pipe(
        first(),
        tap((response) => {
          if (notify) this.showSnack('Task updated');
          this.tasks$.next(
            this.tasks$.value.map((task) =>
              task.id === response.id ? response : task
            )
          );
        })
      );
  }

  public delete(id: string): Observable<unknown> {
    return this.http
      .delete(`http://localhost:3030/tasks/${id}`, { responseType: 'text' })
      .pipe(
        tap(() => {
          this.showSnack('Task deleted');
          this.tasks$.next(this.tasks$.value.filter((task) => task.id != id));
        })
      );
  }
}
