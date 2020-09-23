import { Component, OnInit } from '@angular/core';
import {FilterServiceService} from '../services/filter-service.service';
import {FormControl} from '@angular/forms';
import {ListboxModule} from 'primeng/listbox';
import {SelectItem} from 'primeng/api';

interface City {
  name: string
  code: string
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  selectedCities: City[];
  cities1: SelectItem[];
  cities2: City[];
  selectedCity1: City;

  selectedCity2: City;
  cities: SelectItem[];

  toppings = new FormControl();
  producersList: string[] = [
    'Asus', 'Apple', 'Dell', 'HP', 'MSI', 'Toshiba'];
  selected = '-----';

  constructor(public filterService: FilterServiceService) {
    //SelectItem API with label-value pairs
    this.cities1 = [
      {label:'Select City', value:null},
      {label:'New York', value:{id:1, name: 'New York', code: 'NY'}},
      {label:'Rome', value:{id:2, name: 'Rome', code: 'RM'}},
      {label:'London', value:{id:3, name: 'London', code: 'LDN'}},
      {label:'Istanbul', value:{id:4, name: 'Istanbul', code: 'IST'}},
      {label:'Paris', value:{id:5, name: 'Paris', code: 'PRS'}}
    ];

    //An array of cities
    this.cities2 = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
    ];

    this.cities = [
      {label:'Select City', value:null},
      {label:'New York', value:{id:1, name: 'New York', code: 'NY'}},
      {label:'Rome', value:{id:2, name: 'Rome', code: 'RM'}},
      {label:'London', value:{id:3, name: 'London', code: 'LDN'}},
      {label:'Istanbul', value:{id:4, name: 'Istanbul', code: 'IST'}},
      {label:'Paris', value:{id:5, name: 'Paris', code: 'PRS'}}
    ];



  }

  ngOnInit() {
  }

}
