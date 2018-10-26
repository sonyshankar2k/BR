import {CommonModule} from "@angular/common";
import {NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {ContactComponent} from "./contact.component";

@NgModule({
    imports: [
        BrowserModule,
        CommonModule
    ],
    declarations: [
        ContactComponent
    ],
    exports: [
        ContactComponent
    ],
    entryComponents: [
        ContactComponent
    ],
    providers: [
    ]
})

export class ContactModule {
}
