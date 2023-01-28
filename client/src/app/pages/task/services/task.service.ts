import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, first, map, Observable } from "rxjs";
import { ITask } from "src/app/shared/models/task";
import { enviroment } from "src/enviroments/enviroment";

@Injectable({
    providedIn: "root",
})
export class TaskService {
    constructor(private http: HttpClient) {}

    private currTask$ = new BehaviorSubject<ITask | undefined>(undefined);

    public setCurrTask(task: ITask) {
        this.currTask$.next(task);
    }
    public getCurrTask(): Observable<ITask | undefined> {
        return this.currTask$.asObservable();
    }

    public get(): Observable<ITask[]> {
        return this.http
            .get<ITask[]>(`${enviroment.apiUrl}/tasks`)
            .pipe(first());
    }
}
