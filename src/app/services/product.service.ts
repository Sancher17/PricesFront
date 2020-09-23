import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  showProduct: boolean = false;

  constructor() { }
}
