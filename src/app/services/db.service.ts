import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BaseEntity} from '../model/baseentity';

interface BaseShop {
  source: string;
  price: string;
  priceLink: string;
  category: string;
}


@Injectable({providedIn: 'root'})
export class DbService {
    baseEntities: BaseEntity[];
    baseShop: BaseShop;
    private url: string;
    category: string;
    page: number = 0;
    size: number = 10;
    length: number = 100;
    pageSizeOptions: number[] = [10, 20, 50, 100];
    producer: string = '';

    constructor(public http: HttpClient) {
    }

    getFromDbById() {
        this.http.get<BaseShop>('http://localhost:9091/db/getById?id=6113')
            .subscribe(resp => {
                console.log(resp);
                this.baseShop = resp;
            });

    }

    getAllFromDbByCategory() {
        console.log('getAllFromDbByCategory', this.category + ' ' + this.page + ' ' + this.size);
        this.url = 'http://localhost:9091/db/getByCategory';
        this.http.get<BaseEntity[]>(this.url, {
            params: new HttpParams()
                .set('category', this.category)
                .set('page', String(this.page))
                .set('size', String(this.size))
        })
            .subscribe(resp => {
                console.log(resp);
                this.baseEntities = resp;
            });

    }

    // getById(id: number): baseentity.ts  {
    //    this.http.get<Model.baseentity.ts>('http://localhost:9091/db/getById?id=' + id)
    //        .subscribe(resp => {
    //            console.log(resp);
    //            this.product = resp;
    //            console.log(this.product);
    //        });
    //     return this.product;
    // }

    getById(id: number): Observable<BaseEntity> {
        return this.http.get<BaseEntity>('http://localhost:9091/db/getById?id=' + id);
    }

    // ***************************************************
    // getById(id: number): Observable<BaseEntity[]> {
    //     return this.http.get<BaseEntity[]>('http://localhost:9091/db/getById?id=' + id);
    // }

    getByCategoryAndProducer() {
        console.log('getByCategoryAndProducer', this.category + ' ' + this.page + ' ' + this.size);
        this.url = 'http://localhost:9091/db/getByCategoryAndProducer';
        this.http.get<BaseEntity[]>(this.url, {
            params: new HttpParams()
                .set('category', this.category)
                .set('producer', this.producer)
                .set('page', String(this.page))
                .set('size', String(this.size))
        })
            .subscribe(resp => {
                console.log(resp);
                this.baseEntities = resp;
            });
    }
}
