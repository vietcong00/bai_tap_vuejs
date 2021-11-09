export interface IProduct {
    id: string;
    imgLink: string;
    rate: number;
    reviews: number;
    category: string;
    name: string;
    oldPrice: number;
    newPrice: number;
    statusStock: string;
    parameter: Array<{
        option?: string;
        value?: string;
    }>;
    colors: Array<string>;
    details: Array<string>;
    images: Array<string>;
    quantity: number;
    subtotal: number;
}

export interface ICartItem {
    id: string;
    quantity: number;
}

export interface ITextItem {
    name: string;
    number: number;
}

export interface IFilterChosenList {
    [key: string]: any;
}

export type SortType = 'id' | 'Name' | 'name' | 'Rate' | 'rate' | 'Price' | 'newPrice';
