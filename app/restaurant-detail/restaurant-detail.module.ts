import {CommonModule} from "@angular/common";
import {NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {RestaurantDetailComponent} from "./restaurant-detail.component";
import {DataPubSubService} from "../_services/index";

@NgModule({
    imports: [
        BrowserModule,
        CommonModule
    ],
    declarations: [
        RestaurantDetailComponent
    ],
    exports: [
        RestaurantDetailComponent
    ],
    entryComponents: [
        RestaurantDetailComponent
    ],
    providers: [
        DataPubSubService
    ]
})

export class RestaurantDetailModule {
}
