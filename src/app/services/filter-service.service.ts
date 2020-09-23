import {Injectable, OnInit} from '@angular/core';

interface Characteristic {
  id: number;
  name: string;
}

interface Category {
  id: number;
  nameRus: string;
  nameEng: string;
  img: string;
}

interface Producer {
  id: number;
  name: string;
}

@Injectable({
    providedIn: 'root'
})
export class FilterServiceService implements OnInit {

    category: string;
    characteristicsDefault: Characteristic[] = [
        {id: 1, name: 'Screen'},
        {id: 2, name: 'Ram'},
        {id: 3, name: 'Cpu'},
        {id: 4, name: 'Model'},
        {id: 5, name: 'Год'},
        {id: 6, name: 'Популярность'},
        {id: 7, name: 'Цена'},
        {id: 8, name: 'Model'},
        {id: 9, name: 'Model'},
        {id: 10, name: 'Model'},
    ];
    characteristics: Characteristic[] = this.characteristicsDefault;

    filtersCategory: Category[] = [
        {id: 1, nameRus: 'Ноутбуки', nameEng: 'notebook', img: 'assets/notebook.webp'},
        {id: 2, nameRus: 'Телефоны', nameEng: 'smartphone', img: 'assets/phone.webp'},
        {id: 3, nameRus: 'Телевизоры', nameEng: 'tv', img: 'assets/tv.jpg'},
        {id: 4, nameRus: 'Приставки', nameEng: 'console', img: 'assets/console.jpg'},
        {id: 5, nameRus: 'Мониторы', nameEng: 'monitor', img: 'assets/monitor.jpg'},
        {id: 6, nameRus: 'Принтеры', nameEng: 'printer', img: 'assets/printer.webp'},
        {id: 11, nameRus: 'Планшеты', nameEng: 'tablet', img: 'assets/tablet.jpg'},
        {id: 12, nameRus: 'Фотоаппараты', nameEng: 'photo', img: 'assets/notebook.webp'},
    ];

    producers: Producer[] = [
        {id: 1, name: 'Asus'},
        {id: 2, name: 'Apple'},
        {id: 3, name: 'HP'},
        {id: 4, name: 'Dell'},
        {id: 5, name: 'MSI'},
        {id: 6, name: 'Acer'},
        {id: 7, name: 'Sony'},
        {id: 8, name: 'Cannon'},
        {id: 9, name: 'Fujifilm'},
    ];

    constructor() {
    }

    ngOnInit(): void {
        if (this.category === 'notebook'){
            this.characteristics = [
                {id: 1, name: 'Notebook Screen'},
                {id: 2, name: 'Notebook Ram'},
                {id: 3, name: 'Notebook Ram'},
                {id: 4, name: 'Notebook Ram'},
                {id: 5, name: 'Notebook Ram'},
            ];
        }else {
            this.characteristics = this.characteristicsDefault;
        }
    }
}
