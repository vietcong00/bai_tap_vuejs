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

export interface IFilterChosen {
    [key: string]: any;
}
