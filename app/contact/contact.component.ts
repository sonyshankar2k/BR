import {Component, OnInit, NgZone} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

@Component({
    moduleId: module.id.toString(),
    selector: 'app-contact',
    templateUrl: 'contact.component.html',
    styleUrls: ['contact.component.less']
})
export class ContactComponent implements OnInit {

    constructor(private location: Location, private router: Router, private zone: NgZone) {
    }

    ngOnInit() {
    }

    goBack() {
        this.location.back();
    }

    refresh() {
        this.zone.runOutsideAngular(() => {
            location.reload();
        });
    }

    goNext() {
        this.location.forward();
    }
}
