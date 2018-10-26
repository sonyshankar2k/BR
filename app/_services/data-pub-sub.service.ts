import {Injectable} from '@angular/core';
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import Restaurant = namespace.Restaurant;

@Injectable({
    providedIn: 'root'
})
export class DataPubSubService {
    // @ts-ignore
    public showBackIcon$ = new Subject();

    public restaurantDetail$: BehaviorSubject<Restaurant> = null;

    constructor() {
    }

}
