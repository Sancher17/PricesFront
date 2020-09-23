import { Component, OnInit } from '@angular/core';
import {HomeComponent} from '../home/home.component';
import {HomeService} from '../services/home.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private homeService:HomeService) { }

  ngOnInit() {
  }

  onClickHome() {
    this.homeService.showCategories = true
    this.homeService.showMain = false
  }
}
