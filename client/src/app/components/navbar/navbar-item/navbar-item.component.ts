import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: "app-navbar-item",
    templateUrl: "./navbar-item.component.html",
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarItemComponent {
    @Input() label?: string = "";
    @Input() icon!: IconDefinition;

    @Input() addItem?: boolean = false;
}
