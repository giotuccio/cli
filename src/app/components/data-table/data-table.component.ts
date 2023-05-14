import { Component } from '@angular/core';
import { Product } from 'src/app/objects/products';
import { ProductService } from 'src/app/service/productservice.service';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
  providers: [MessageService, DialogService]
})
export class DataTableComponent {
  products!: Product[]
  selectedProduct?: Product;
  ref!: DynamicDialogRef;
  visible!: boolean
  data: any;
  manageProducts= false;
  options: any;
  constructor(private productService: ProductService, public dialogService: DialogService, public messageService: MessageService) { }

  ngOnInit() {
    this.productService.getProductsSmall().then((cars) => (this.products = cars));
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    this.data = {
        labels: ['A', 'B', 'C'],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
                hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
            }
        ]
    };


    this.options = {
        cutout: '60%',
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        }
    };

  }
  ngOnDestroy() {
    if (this.ref) {
      this.ref.close();
    }
  }
  getSeverity(status: any) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
    }
    return status
  }
  showDialog(product: Product) {
    this.selectedProduct = product

    this.visible = true;
}

showToast() {
  this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Order for ' + this.selectedProduct?.name + ' recieved'  });
}

  show(templateRef: any, product: Product) {
    this.selectedProduct = product
this.ref = this.dialogService.open(templateRef, {
      width: '400px',
      height: '500px',
      data: {
        product: this.selectedProduct
      }
    });
    this.ref.onClose.subscribe((product: Product) => {
      if (product) {
          this.messageService.add({ severity: 'info', summary: 'Product Selected', detail: product.name });
      }
  });





    this.ref.onClose.subscribe((product: Product) => {
      if (product) {
        this.messageService.add({ severity: 'info', summary: 'Product Selected', detail: product.name });
      }
    });

    this.ref.onMaximize.subscribe((value) => {
      this.messageService.add({ severity: 'info', summary: 'Maximized', detail: `maximized: ${value.maximized}` });
    });
  }


  onManageProducts(){
    this.manageProducts = !this.manageProducts
      }
}