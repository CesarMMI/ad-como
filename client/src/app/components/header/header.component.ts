import { ChangeDetectionStrategy, Component } from "@angular/core";
import { faBars } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
    protected faBars = faBars;
}
