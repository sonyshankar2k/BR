import {Component, AfterContentChecked, OnInit} from '@angular/core';

import {DataPubSubService} from '../_services/index';
import {slideInOutAnimation} from '../_animations/index';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'restaurant-detail.component.html',
    animations: [slideInOutAnimation],
    host: {'[@slideInOutAnimation]': ''}
})

export class RestaurantDetailComponent implements OnInit, AfterContentChecked {
    public restaurantDetail = {};
    public googleDrivingDirection;
    // public googleDrivingURL = "https://www.google.com/maps/dir/?api=1&";
    //public googleDrivingURL = "http://maps.google.com/?daddr=";
    public googleDrivingURL = "https://www.google.com/maps/dir/?api=1&";

    constructor(private dataPubSubService: DataPubSubService) {}

    ngOnInit() {
        this.restaurantDetail = this.restaurantDetailSubscription = this.dataPubSubService.restaurantDetail$.getValue();

        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(position => {
                this.location = position.coords;
                console.log(position.coords);
                this.googleDrivingURL+= 'origin=' + this.location.latitude + ',' + this.location.longitude +'&';
                this.googleDrivingURL+= 'destination=' + this.restaurantDetail.location.lat + ',' + this.restaurantDetail.location.lng;
            });
        }

    }

}