import { Component } from "@angular/core";
import { combineLatest, map, Observable } from "rxjs";
import { ITask } from "src/app/shared/models/task";
import { TaskService } from "../../services/task.service";

@Component({
    templateUrl: "./task-list.component.html",
    styles: [],
})
export class TaskListComponent {

    protected tasksVM$: Observable<{
        tasks: ITask[];
        currTask: ITask | undefined;
    }>;
    
    constructor(private taskService: TaskService) {
        this.tasksVM$ = combineLatest([
            taskService.get(),
            taskService.getCurrTask(),
        ]).pipe(
            map(([tasks, currTask]) => {
                return {
                    tasks,
                    currTask,
                };
            })
        );
    }

    protected onSelect(task: ITask) {
        this.taskService.setCurrTask(task);
    }
}
