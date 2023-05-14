import { Component } from '@angular/core';
import { Product } from '../../objects/products';
import { ProductService } from '../../service/productservice.service';

@Component({
  selector: 'app-picklist',
  templateUrl: './picklist.component.html',
  styleUrls: ['./picklist.component.css']
})
export class PicklistComponent {
  sourceProducts!: Product[];

  targetProducts!: Product[];

  constructor(private carService: ProductService) {}

  ngOnInit() {
      this.carService.getProductsSmall().then((products) => (this.sourceProducts = products));
      this.targetProducts = [];
  }
}
