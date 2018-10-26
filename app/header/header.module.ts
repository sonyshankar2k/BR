import {CommonModule} from "@angular/common";
import {NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {HeaderComponent} from "./header.component";
import {DataPubSubService, RestaurantListService} from "../_services/index";

@NgModule({
    imports: [
        BrowserModule,
        CommonModule
    ],
    declarations: [
        HeaderComponent
    ],
    exports: [
        HeaderComponent
    ],
    entryComponents: [
        HeaderComponent
    ],
    providers: [
        RestaurantListService,
        DataPubSubService
    ]
})

export class HeaderModule {
}
