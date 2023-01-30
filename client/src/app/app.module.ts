import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderModule } from "./components/header/header.module";
import { NavBarModule } from "./components/nav-bar/nav-bar.module";
import { ModalModule } from "./shared/components/modal/modal.module";

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HeaderModule,
        HttpClientModule,
        NavBarModule,
        ModalModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
