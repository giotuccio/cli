import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-tabmenu',
  templateUrl: './tabmenu.component.html',
  styleUrls: ['./tabmenu.component.css']
})
export class TabmenuComponent {
  items!: MenuItem[];

  activeItem!: MenuItem;

  ngOnInit() {
      this.items = [
          { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/' },
          { label: 'Inventory Management', icon: 'pi pi-fw pi-database',routerLink: 'product-inventory'  },
          // { label: 'Pick List', icon: 'pi pi-fw pi-pencil',routerLink: 'pick' },
          { label: 'Expenses', icon: 'pi pi-fw pi-dollar',routerLink: 'expense-tracking' },
          { label: 'Pricing Optimization', icon: 'pi pi-fw pi-thumbs-up-fill',routerLink: 'pricing' },
          { label: 'Order Tracking', icon: 'pi pi-fw pi-truck',routerLink: 'tracking' },
          { label: 'Notifications ', icon: 'pi pi-fw pi-bell',routerLink: 'notifications' },
          { label: 'Performance Dashboard:', icon: 'pi pi-fw pi-chart-bar',routerLink: 'performance' },
      ];

      this.activeItem = this.items[0];
  }

  onActiveItemChange(event: any){
      this.activeItem = event;
  }

  activateLast() {
      this.activeItem = this.items[this.items.length - 1];
  }
}
