import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    template: `
        <div class="w-screen h-screen p-4">
            <router-outlet></router-outlet>
        </div>
        <app-nav-bar></app-nav-bar>
    `,
    styles: [],
})
export class AppComponent {
    title = "ad-como";
}
