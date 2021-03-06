import {CommonModule} from "@angular/common";
import {NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {FooterComponent} from "./footer.component";

@NgModule({
    imports: [
        BrowserModule,
        CommonModule
    ],
    declarations: [
        FooterComponent
    ],
    exports: [
        FooterComponent
    ],
    entryComponents: [
        FooterComponent
    ],
    providers: [
    ]
})

export class HeaderModule {
}
