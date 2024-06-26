export interface Product{
    id: number;
    name: string;
    description: string;
    price: number;
    type?: string;
    brand: string;
    quantityInStock?: number;
}