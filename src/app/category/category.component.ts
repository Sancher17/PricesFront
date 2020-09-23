import {Component, Input, OnInit} from '@angular/core';
import {DbService} from '../services/db.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor(public dbService: DbService) { }

  ngOnInit() {
    console.log('init category')
    this.dbService.getAllFromDbByCategory();
  }
}
