import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { AbstractControl } from "@angular/forms";

@Component({
    selector: "app-input-text-area",
    templateUrl: "./input-text-area.component.html",
    styleUrls: ["./input-text-area.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputTextAreaComponent {
    @Input() control!: AbstractControl;
    @Input() placeholder: string = "";
}
