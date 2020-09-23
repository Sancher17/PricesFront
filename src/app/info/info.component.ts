import {Component, OnInit} from '@angular/core';
import {DbService} from '../services/db.service';

@Component({
    selector: 'app-info',
    templateUrl: './info.component.html',
    styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

    private info: string[] = [];

    constructor(public dbService: DbService) {
    }

    ngOnInit() {
        this.info.push(this.dbService.category)
    }
}
