import {Component, OnInit} from '@angular/core';
import {FilterServiceService} from '../services/filter-service.service';
import {DbService} from '../services/db.service';

@Component({
    selector: 'app-filter-category',
    templateUrl: './filter-category.component.html',
    styleUrls: ['./filter-category.component.scss']
})
export class FilterCategoryComponent implements OnInit {

    constructor(
        public filterService: FilterServiceService,
        public dbService: DbService) {
    }

    ngOnInit() {
    }

    step = 0;

    setStep(index: number) {
        this.step = index;
    }

    onClick(category: string) {
        console.log('Event', category);
        if (this.dbService.category !== category){
            this.dbService.producer = '';
        }
        this.dbService.category = category;
        // this.dbService.infos.push(category);
        this.dbService.getAllFromDbByCategory();
        this.filterService.category = category;
        this.filterService.ngOnInit();
    }

    onClickProducer(producer: string) {
        console.log('Event', producer);
        this.dbService.producer = producer;

    }

    onClickFind() {
        this.dbService.getByCategoryAndProducer();
    }
}
