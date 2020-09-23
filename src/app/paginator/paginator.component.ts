import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {DbService} from '../services/db.service';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  length = 100;
  pageSize = 10;
  pageIndex;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageEvent: any;

  constructor(
    public dbService: DbService) {
  }

  ngAfterViewInit() {
    this.paginator.page.subscribe(
      (event) => {
        console.log(event);
        this.pageIndex = event.pageIndex;
        this.dbService.page = event.pageIndex;
        this.dbService.size = event.pageSize;
        this.dbService.getAllFromDbByCategory();
      }
    );
  }
}
