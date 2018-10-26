import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class RestaurantListService {
    constructor(private http: Http) {
        this.http = http;
    }

    private restaurantUrl = "https://s3.amazonaws.com/br-codingexams/restaurants.json";

    getAll() {
        return this.getRestaurants();
    }

    getById(id: number) {
        let restaurant;
        this.getRestaurants().subscribe(
            (restuarant) => {
                restaurant = restuarant[id];
            }
        )
        return restaurant;
    }

    public getRestaurants(): Observable<Array[]> {
        return this.http.get(this.restaurantUrl)
            .map(this.extractData);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.restaurants || {};
    }

    private setRestaurants(restaurants: any[]) {
        localStorage.setItem('restaurants', JSON.stringify(restaurants));
    }
}