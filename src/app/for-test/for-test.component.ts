import {Component} from '@angular/core';
import {SelectItem} from 'primeng/api';

class City {
  name: string
  code: string
}

@Component({
  selector: 'app-for-test',
  templateUrl: './for-test.component.html',
  styleUrls: ['./for-test.component.scss'],
})
export class ForTestComponent {

  cities: City[];

  selectedCity: City;

  selectedCities: City[];

  cars: SelectItem[];

  selectedCar: string = 'BMW';

  constructor() {
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'},
      {name: 'Paris', code: 'PRS'},
      {name: 'Paris', code: 'PRS'},
      {name: 'Paris', code: 'PRS'},
      {name: 'Paris', code: 'PRS'}
    ];

    this.cars = [
      {label: 'Audi', value: 'Audi'},
      {label: 'BMW', value: 'BMW'},
      {label: 'Fiat', value: 'Fiat'},
      {label: 'Ford', value: 'Ford'},
      {label: 'Honda', value: 'Honda'},
      {label: 'Jaguar', value: 'Jaguar'},
      {label: 'Mercedes', value: 'Mercedes'},
      {label: 'Renault', value: 'Renault'},
      {label: 'VW', value: 'VW'},
      {label: 'Volvo', value: 'Volvo'}
    ];
  }

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

}
