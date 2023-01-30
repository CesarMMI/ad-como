import { trigger, transition, style, animate } from "@angular/animations";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { Observable } from "rxjs";
import { ModalService } from "./modal.service";

@Component({
    selector: "app-modal",
    templateUrl: "./modal.component.html",
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent {
    protected show$: Observable<boolean>;
    protected faClose = faClose;

    constructor(private modalService: ModalService) {
        this.show$ = modalService.getShow();
    }

    protected close() {
        this.modalService.setShow(false);
    }
}
