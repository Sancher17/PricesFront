// tslint:disable-next-line:no-namespace
namespace Model {

    export interface BaseShop {
        source: string;
        price: string;
        priceLink: string;
        category: string;
    }

    export interface Characteristic {
        id: number;
        name: string;
    }

    export interface Category {
        id: number;
        nameRus: string;
        nameEng: string;
        img: string;
    }

    export interface Producer {
        id: number;
        name: string;
    }
}
