import {Component, OnInit} from '@angular/core';
import {DbService} from '../services/db.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor(public _firstServiceService: DbService) {
  }


  get firstServiceService(): DbService {
    return this._firstServiceService;
  }

  ngOnInit() {
    // this.firstServiceService.getFromDB()














    // this.http.get<Todo []>('https://jsonplaceholder.typicode.com/todos?_limit=10')
    //     .subscribe(resp => {
    //         console.log(resp)
    //       this.todos = resp;
    //     });

    // this.http.get<Response>('http://localhost:9091/db/getById?id=6113')
    //   .subscribe(resp => {
    //     console.log(resp);
    //     this.responses = resp;
    //   });

    // const req: Request = {
    //   category: 'notebook',
    //   shopSource: 'onliner',
    //   pages: '1'
    // };
    //
    // this.http.post<Response []>('http://localhost:9091/parser/saveItemToDB', req)
    //   .subscribe(resp => {
    //     console.log(resp);
    //     this.responses = resp;
    //   });
  }
}
