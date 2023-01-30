import { ChangeDetectionStrategy, Component } from "@angular/core";
import { faAdd, faListCheck, faTags } from "@fortawesome/free-solid-svg-icons";
import { ModalService } from "src/app/shared/components/modal/modal.service";

@Component({
    selector: "app-nav-bar",
    templateUrl: "./nav-bar.component.html",
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarComponent {

    constructor(private modalService: ModalService){}

    protected onAddClick() {
        this.modalService.toggleShow();
    }

    protected defaultClasses = ["text-xs", "w-20", "h-full"];
    protected items = [
        {
            icon: faListCheck,
            label: "Tasks",
            classes: this.defaultClasses,
            iconClasses: [],
            click: () => {}
        },
        {
            icon: faAdd,
            classes: [
                ...this.defaultClasses,
                "bg-neutral-800",
                "text-neutral-100",
                "rounded-none",
                "rounded-t-3xl",
            ],
            iconClasses: ["fa-xl"],
            click: () => this.onAddClick()
        },
        {
            icon: faTags,
            label: "Categories",
            classes: this.defaultClasses,
            iconClasses: [],
            click: () => {}
        },
    ];
}
