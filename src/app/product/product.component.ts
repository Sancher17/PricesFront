import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {DbService} from '../services/db.service';
import {BaseEntity} from '../model/baseentity';
import {ProductService} from '../services/product.service';
// import {NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public productLoc = new BaseEntity();

    // galleryOptions: NgxGalleryOptions[];
    // galleryImages: NgxGalleryImage[];

    constructor(
        public route: ActivatedRoute,
        public dbService: DbService,
        public productService: ProductService) {
    }

    ngOnInit() {
        console.log('product init');
        // загрузка картинок
        // this.galleryOptions = [
        //     {
        //         width: '540px',
        //         height: '370px',
        //         thumbnailsColumns: 4,
        //         imageAnimation: NgxGalleryAnimation.Slide
        //     },
        //     // max-width 800
        //     {
        //         breakpoint: 800,
        //         width: '100%',
        //         height: '600px',
        //         imagePercent: 80,
        //         thumbnailsPercent: 20,
        //         thumbnailsMargin: 20,
        //         thumbnailMargin: 20
        //     },
        //     // max-width 400
        //     {
        //         breakpoint: 400,
        //         preview: false
        //     }
        // ];
        //
        // this.galleryImages = [
        //     {
        //         small: 'assets/console.jpg',
        //         medium: 'assets/console.jpg',
        //         big: 'assets/console.jpg'
        //     },
        //     {
        //         small: 'assets/monitor.jpg',
        //         medium: 'assets/monitor.jpg',
        //         big: 'assets/monitor.jpg'
        //     },
        //     {
        //         small: 'assets/notebook.webp',
        //         medium: 'assets/notebook.webp',
        //         big: 'assets/notebook.webp'
        //     }
        // ];
        //
        // this.route.params.subscribe((params: Params) => {
        //     this.dbService.getById(params.id).subscribe(
        //         data => {
        //             this.productLoc = new BaseEntity(data);
        //             console.log('productLoc', this.productLoc);
        //         },
        //         error => console.log(error)
        //     );
        // });

    }


    // ***********************************************************
    // categories: BaseEntity[];
    // ngOnInit() {
    //     this.dbService.getById(5).pipe(
    //         map((response: { [id: number]: BaseEntity }) => {
    //                 const catArr: BaseEntity[] = [];
    //                 for (const id in response) {
    //                     catArr.push({ ...response[id] });
    //                 }
    //                 return catArr;
    //             })
    //         )
    //         .subscribe(category => {
    //             this.categories = category;
    //         });
    // }
    // ***********************************************************
}
