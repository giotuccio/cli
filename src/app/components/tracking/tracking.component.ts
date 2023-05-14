import { Component , OnInit} from '@angular/core';
import { SaleOrders } from 'src/app/objects/sale-orders';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css']
})
export class TrackingComponent implements OnInit {
  ngOnInit(): void {
   this.saleOrders = [
    {
      id: 1,
      product: {
        id: 'p1',
        code: 'PROD001',
        name: 'Gaming Controller',
        description: 'Description 1',
        price: 10.99,
        quantity: 50,
        inventoryStatus: 'In Stock',
        category: 'Category 1',
        image: 'product1.jpg',
        rating: 4.5,
      },
      salesDate: '2023-05-01',
      deliveredDate: '2023-05-08',
      etaDate: '2023-05-05',
      distance: 5,
      customer: {
        id: 'c1',
        name: 'John Doe',
        email: 'johndoe@example.com',
        phone: '1234567890',
        address: '123 Main St, City',
      },
    },
    {
      id: 2,
      product: {
        id: 'p2',
        code: 'PROD002',
        name: 'Bamboo Watch',
        description: 'Description 2',
        price: 19.99,
        quantity: 30,
        inventoryStatus: 'In Stock',
        category: 'Category 2',
        image: 'product2.jpg',
        rating: 4.2,
      },
      salesDate: '2023-05-02',
      deliveredDate: '2023-05-09',
      etaDate: '2023-05-06',
      distance: 60,
      customer: {
        id: 'c2',
        name: 'Jane Smith',
        email: 'janesmith@example.com',
        phone: '9876543210',
        address: '456 Oak St, City',
      },
    },
    {
      id: 2,
      product: {
        id: 'p2',
        code: 'PROD002',
        name: 'Bamboo Watch',
        description: 'Description 2',
        price: 19.99,
        quantity: 30,
        inventoryStatus: 'In Stock',
        category: 'Category 2',
        image: 'product2.jpg',
        rating: 4.2,
      },
      salesDate: '2023-05-02',
      deliveredDate: '2023-05-09',
      etaDate: '2023-05-06',
      distance: 100,
      customer: {
        id: 'c2',
        name: 'Gio Smith',
        email: 'janesmith@example.com',
        phone: '9876543210',
        address: '7 Birch St, City',
      },
    },
  ]
  }

saleOrders: SaleOrders[] = []
}
