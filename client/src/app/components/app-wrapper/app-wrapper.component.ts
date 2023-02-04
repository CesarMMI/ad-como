import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  NavigationEnd,
  Router,
} from '@angular/router';
import { debounceTime, filter, map } from 'rxjs';

@Component({
  selector: 'app-wrapper',
  templateUrl: './app-wrapper.component.html',
  styleUrls: ['./app-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppWrapperComponent {
  protected title = this.router.events.pipe(
    filter((event) => event instanceof NavigationEnd),
    map((event: any) => event.url.charAt(1).toUpperCase() + event.url.slice(2)
    )
  );

  constructor(private router: Router, private route: ActivatedRoute) {}
}
