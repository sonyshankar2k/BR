import {TestBed, inject} from '@angular/core/testing';

import {DataPubSubService} from './data-pub-sub.service';

describe('DataService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [DataPubSubService]
        });
    });

    it('should be created', inject([DataPubSubService], (service: DataPubSubService) => {
        expect(service).toBeTruthy();
    }));
});
