import {Component, OnInit} from '@angular/core';
import {DbService} from '../services/db.service';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent implements OnInit {

  constructor(
    public dbService: DbService,
  ) { }

  ngOnInit() {
    console.log('left panel init')
  }

  change(value: boolean): void {
    // console.log('left panel провел мышкой над телефоном', value);
  }

  onClick(category: string) {
    this.dbService.category = category;
  }
}
