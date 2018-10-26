import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';

import {DataPubSubService, RestaurantListService} from '../_services/index';
import {fadeInAnimation} from '../_animations/index';
import {BehaviorSubject} from "rxjs/BehaviorSubject";


@Component({
    moduleId: module.id.toString(),
    selector: 'restaurant-list',
    templateUrl: 'restaurant-list.component.html',
    animations: [fadeInAnimation],
    host: {'[@fadeInAnimation]': ''}
})

export class RestaurantListComponent implements OnInit, OnDestroy {
    private restaurantServiceSubscription: Subscription;
    public restaurantList: any[];

    constructor(
        private restaurantListService: RestaurantListService,
        private dataPubSubService: DataPubSubService) {
    }

    ngOnInit() {
        this.getRestaurantList();
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.restaurantServiceSubscription.unsubscribe();
    }

    private getRestaurantList() {
        this.restaurantServiceSubscription = this.restaurantListService.getRestaurants()
            .subscribe(
                restaurantList => this.restaurantList = restaurantList);
    }

    public getRestaurantDetails(restaurant) {
        this.dataPubSubService.showBackIcon$.next(true);
        this.dataPubSubService.restaurantDetail$ = new BehaviorSubject(restaurant);
    }
}