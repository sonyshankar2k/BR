import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {AppRoutingModule, routedComponents} from './app-routing.module';
import {RestaurantListService, DataPubSubService} from './_services/index';
import {AgmCoreModule} from "@agm/core";
import {HttpModule} from "@angular/http";
import {FooterComponent} from "./footer/footer.component";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        // ToDo - Sankar - I am using my google maps platform api
        AgmCoreModule.forRoot({apiKey: 'AIzaSyDE1vUAGoUlxMQ7aIkvkmRdC4ycepgn5Gw'})
    ],
    declarations: [
        AppComponent,
        routedComponents,
        FooterComponent
    ],
    providers: [
        RestaurantListService,
        DataPubSubService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}