declare module namespace {

    export interface Contact {
        phone: string;
        formattedPhone: string;
        twitter: string;
        facebook: string;
        facebookUsername: string;
        facebookName: string;
    }

    export interface Location {
        address: string;
        crossStreet: string;
        lat: number;
        lng: number;
        postalCode: string;
        cc: string;
        city: string;
        state: string;
        country: string;
        formattedAddress: string[];
    }

    export interface Restaurant {
        name: string;
        backgroundImageURL: string;
        category: string;
        contact: Contact;
        location: Location;
    }

    export interface RootObject {
        restaurants: Restaurant[];
    }

}

