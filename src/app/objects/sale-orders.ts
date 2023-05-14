import { Customer } from "./customer";
import { Product } from "./products";

export interface SaleOrders {
    id: number;
    product: Product;
    salesDate: string;
    deliveredDate: string;
    etaDate: string;
    customer: Customer;
    distance: number;
}