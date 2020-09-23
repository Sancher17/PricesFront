import {Component, OnInit} from '@angular/core';
import {DbService} from '../services/db.service';
import {NzPaginationComponent} from 'ng-zorro-antd';
import {MainService} from '../services/main.service';

export interface Data {
  id: number;
  name: string;
  age: number;
  address: string;
  disabled: boolean;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    public dbService: DbService,
    public mainService: MainService) {
  }


  ngOnInit(): void {
    console.log('init main module')
    // this.dbService.getAllFromDbByCategory()
  }


  pageIndex(pageIndex: number) {
    console.log('Page index ', pageIndex)
    this.dbService.page = pageIndex-1;
    this.dbService.getAllFromDbByCategory()

  }

  pageSize(pageSize: number) {
    console.log('Page size ' , pageSize);
    this.dbService.size = pageSize;
    this.dbService.page = 0;
    this.dbService.getAllFromDbByCategory()
  }
}
