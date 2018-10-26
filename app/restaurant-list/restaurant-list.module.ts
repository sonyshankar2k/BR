import {CommonModule} from "@angular/common";
import {NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {RestaurantListComponent} from "./restaurant-list.component";
import {DataPubSubService, RestaurantListService} from "../_services/index";

@NgModule({
    imports: [
        BrowserModule,
        CommonModule
    ],
    declarations: [
        RestaurantListComponent
    ],
    exports: [
        RestaurantListComponent
    ],
    entryComponents: [
        RestaurantListComponent
    ],
    providers: [
        RestaurantListService,
        DataPubSubService
    ]
})

export class RestaurantListModule {
}
