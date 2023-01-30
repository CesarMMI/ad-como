import { ChangeDetectionStrategy, Component } from "@angular/core";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { map, Observable } from "rxjs";

import { TaskService } from "../../services/task.service";

@Component({
    selector: "app-task-runner",
    templateUrl: "./task-runner.component.html",
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskRunnerComponent {
    protected icon = faAngleDoubleRight;
    protected taskTitle$: Observable<string>;

    constructor(taskService: TaskService) {
        this.taskTitle$ = taskService
            .getCurrTask()
            .pipe(map((res) => (res ? res.title : "Select a task to start")));
    }
}
