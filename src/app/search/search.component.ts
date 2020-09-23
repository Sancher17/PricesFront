import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { }

  inputValue = '';

  ngOnInit() {
  }

  onClick() {
  }

  onInput(event: KeyboardEvent) {
    console.log(event)
    this.inputValue = (<HTMLInputElement>event.target).value
  }

  onBlur(str: string) {
    this.inputValue = str;
    console.log(str)
  }
}
