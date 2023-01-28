import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { faAngleDoubleRight, faChevronRight } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: "app-task-runner",
    templateUrl: "./task-runner.component.html",
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskRunnerComponent {
    @Input() taskTitle?: string;
    protected icon = faAngleDoubleRight;
}
