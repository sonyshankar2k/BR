import {Component, OnInit, NgZone, Input, AfterViewChecked, OnDestroy} from "@angular/core";
import {Location} from '@angular/common';
import {Router, ActivatedRoute} from '@angular/router';
import {DataPubSubService} from "../_services/index";

@Component({
    moduleId: module.id.toString(),
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.less']
})
export class HeaderComponent implements OnInit, AfterViewChecked, OnDestroy {
    private dataPubSubServiceSubscription: Subscription;
    public showBackIcon: boolean = false;

    constructor(private location: Location,
                private router: Router,
                private activatedRoute: ActivatedRoute,
                private zone: NgZone,
                private dataPubSubService: DataPubSubService) {
    }

    ngOnInit() {}

    ngAfterViewChecked() {
        this.dataPubSubServiceSubscription = this.dataPubSubService.showBackIcon$.subscribe(showBackIcon => {
            this.showBackIcon = showBackIcon;
        });
    }

    private ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.dataPubSubServiceSubscription.unsubscribe();
    }

    goBack() {
        this.dataPubSubService.showBackIcon$.next(false);
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
