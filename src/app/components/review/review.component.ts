import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/objects/products';
import { ProductService } from 'src/app/service/productservice.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  products!: Product[]; // Array of products
  
  constructor(private productsService: ProductService){

  }
ngOnInit(): void {
  this.productsService.getProductsSmall().then((cars) => (this.products = cars));
}

  getProductPrice(price: number | undefined): number {
    return parseFloat(price?.toString() || '0');
  }
  
  handlePriceChange(productId: string | undefined, newPrice: number | undefined) : void {
    this.products = this.products.map((product) => {
      if (product.id === productId) {
        return { ...product, price: newPrice };
      }
      return product;
    });
  }
}
