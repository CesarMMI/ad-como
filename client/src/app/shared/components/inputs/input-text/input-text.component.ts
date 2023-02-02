import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { AbstractControl } from "@angular/forms";

@Component({
    selector: "app-input-text",
    templateUrl: "./input-text.component.html",
    styleUrls: ["./input-text.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputTextComponent {
    @Input() control!: AbstractControl;
    @Input() placeholder: string = '';
}
