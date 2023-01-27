import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { bufferTime, debounce, debounceTime } from "rxjs";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
    title?: string;

    constructor(private router: Router) {
      this.onRouteChange()
    }
    
    protected onRouteChange() {
      this.router.events.pipe(
      ).subscribe((event: any) => {
          if (event.url) {
              console.log(event.url);
          }
      });

    }
}
