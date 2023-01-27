import { ChangeDetectionStrategy, Component } from "@angular/core";
import {
    faCirclePlus,
    faListCheck,
    faTags,
    IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: "app-navbar",
    templateUrl: "./navbar.component.html",
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
    protected items: {
        label?: string;
        icon: IconDefinition;
        addItem?: boolean;
        router?: string;
    }[] = [
        {
            label: "Tasks",
            icon: faListCheck,
            router: 'task'
        },
        {
            icon: faCirclePlus,
            addItem: true,
        },
        {
            label: "Categories",
            icon: faTags,
            router: 'category'
        },
    ];
}
