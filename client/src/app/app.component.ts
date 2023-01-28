import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    template: `
        <div class="w-screen h-screen flex flex-col p-4 gap-8">
            <app-header></app-header>
            <div class="flex-1">
                <router-outlet></router-outlet>
            </div>
        </div>
    `,
    styles: [],
})
export class AppComponent {
    title = "ad-como";
}
