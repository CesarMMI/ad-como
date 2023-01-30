import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    template: `
        <div class="w-screen h-screen flex flex-col">
            <app-header class="p-4"></app-header>
            <div class="flex-1 px-4">
                <router-outlet></router-outlet>
            </div>
            <app-nav-bar></app-nav-bar>
        </div>
        
        <app-modal></app-modal>
    `,
    styles: [],
})
export class AppComponent {
    title = "ad-como";
}
