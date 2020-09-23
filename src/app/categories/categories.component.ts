import {Component, OnInit} from '@angular/core';
import {FilterServiceService} from '../services/filter-service.service';
import {DbService} from '../services/db.service';
import {HomeService} from '../services/home.service';
import {MainService} from '../services/main.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor(
    public filterService: FilterServiceService,
    public dbService: DbService,
    public homeService: HomeService,
    public mainService: MainService) {
  }

  ngOnInit() {
    console.log('init categories');
  }

  onClick(category: string) {
    console.log('onClick categories: ', category);
    this.dbService.category = category;
    // this.homeService.showMain = true;
    // this.homeService.showCategories = false;
    // this.homeService.showFilter = false;
    // this.mainService.showMain = true;
    //
    // this.dbService.category = category;
    // this.mainService.showMain = true;
    // console.log('mainService.showMain', this.mainService.showMain)
    // this.homeService.showMain = true;
    // console.log('homeService.showMain', this.homeService.showMain)
    // this.homeService.showCategories = false;
    // console.log('homeService.showCategories', this.homeService.showCategories)
    // this.homeService.showFilter = false;
    // console.log('homeService.showFilter', this.homeService.showFilter )

    // this.dbService.getAllFromDbByCategory();
  }
}
