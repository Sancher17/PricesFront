import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  showFilter: boolean = false;
  showInfo: boolean = false;
  showMain: boolean = false;
  showCategories: boolean = true;
  showProduct: boolean = false;

  constructor() { }
}
