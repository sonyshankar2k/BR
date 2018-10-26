import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {RestaurantListComponent} from './restaurant-list/index';
import {RestaurantDetailComponent} from './restaurant-detail/index';
import {HeaderComponent} from "./header/header.component";
import {ContactComponent} from "./contact/contact.component";

const routes: Routes = [
    {
        path: '',
        component: RestaurantListComponent,
        children: [
            {path: 'restaurant-detail', component: RestaurantDetailComponent}
        ]
    },
    {
        path: 'restaurant-list',
        component: RestaurantListComponent,
        children: [
            {path: 'restaurant-detail', component: RestaurantDetailComponent}
        ]
    },
    {
        path: 'restaurant-contact',
        component: ContactComponent,
    },
    // otherwise redirect to home
    {path: '**', redirectTo: 'restaurant-list'}
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routedComponents = [RestaurantListComponent, RestaurantDetailComponent, HeaderComponent, ContactComponent];
