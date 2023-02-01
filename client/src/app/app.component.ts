import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    template: `
        <main style="width: 100vw; height: 100vh;">
            <router-outlet></router-outlet>
        </main>
    `,
    styles: [],
})
export class AppComponent {
    title = "ad-como";
}
