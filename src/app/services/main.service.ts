import {Injectable} from '@angular/core';
import {FilterServiceService} from './filter-service.service';
import {DbService} from './db.service';



@Injectable({providedIn: 'root'})
export class MainService {

  showMain: boolean = false;

  constructor(public firstServiceService: DbService){

  }
}
