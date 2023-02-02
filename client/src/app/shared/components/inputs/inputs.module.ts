import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { InputTextAreaComponent } from "./input-text-area/input-text-area.component";
import { InputTextComponent } from "./input-text/input-text.component";
import { InputDateComponent } from "./input-date/input-date.component";

@NgModule({
    declarations: [
        InputTextComponent,
        InputTextAreaComponent,
        InputDateComponent,
    ],
    imports: [CommonModule, ReactiveFormsModule],
    exports: [InputTextComponent, InputTextAreaComponent, InputDateComponent],
})
export class InputsModule {}
