import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit,
} from "@angular/core";
import { AbstractControl, FormControl } from "@angular/forms";
import { debounceTime, tap } from "rxjs";

@Component({
    selector: "app-input-date",
    templateUrl: "./input-date.component.html",
    styleUrls: ["./input-date.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputDateComponent {
    @Input() control!: AbstractControl;
    @Input() placeholder: string = "";

    protected showLabel: boolean = true;
}
