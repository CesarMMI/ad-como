import { Component } from "@angular/core";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { combineLatest, map, Observable } from "rxjs";
import { ITask } from "src/app/shared/models/task";
import { TaskService } from "../../services/task.service";

@Component({
    templateUrl: "./task-list.component.html",
    styles: [],
})
export class TaskListComponent {

    protected faAdd = faAdd;

    protected tasks$: Observable<ITask[]>; 
    constructor(private taskService: TaskService) {
        this.tasks$ = taskService.get();
    }

    protected onSelect(task: ITask) {
        this.taskService.setCurrTask(task);
    }
}
