import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { HeaderComponent } from "./header.component";
import { DataService, RestaurantListService, PubSubService } from "../_services/index";

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
    entryComponents:[
        HeaderComponent
    ],
    providers: [
        RestaurantListService,
        PubSubService,
        DataService
    ]
})

export class HeaderModule
{
}
