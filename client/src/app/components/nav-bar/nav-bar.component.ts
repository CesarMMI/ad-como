import { ChangeDetectionStrategy, Component } from "@angular/core";
import {
    faAdd,
    faListCheck,
    faTags,
    IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

export interface INavBarItem {
    icon: IconDefinition;
    label: string;
}

@Component({
    selector: "app-nav-bar",
    templateUrl: "./nav-bar.component.html",
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarComponent {
    constructor() {}

    protected defaultClasses: string[] = [
        "w-full",
        "h-full",
        "p-1",
        "gap-1",
        "text-xs",
        "items-center",
        "flex-col-reverse",
    ];
    protected items = [
        {
            icon: faTags,
            label: "Categories",
            classes: this.defaultClasses,
            iconClasses: ['fa-xl'],
        },
        {
            icon: faAdd,
            classes: [
                ...this.defaultClasses,
                'border-8',
                'border-neutral-200',
                "rounded-full",
                "bg-neutral-800",
                "text-neutral-100",
                "-translate-y-1/3",
            ],
            iconClasses: ['fa-2xl'],
        },
        {
            icon: faListCheck,
            label: "Tasks",
            classes: this.defaultClasses,
            iconClasses: ['fa-xl'],
        },
    ];
}
