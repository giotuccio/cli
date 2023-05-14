import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-dock',
  templateUrl: './dock.component.html',
  styleUrls: ['./dock.component.css']
})
export class DockComponent implements OnInit {
  items!: MenuItem[];

  position: string = 'top';

  positionOptions = [
      {
          label: 'Bottom',
          value: 'bottom'
      },
      {
          label: 'Top',
          value: 'top'
      },
      {
          label: 'Left',
          value: 'left'
      },
      {
          label: 'Right',
          value: 'right'
      }
  ];

  ngOnInit() {
      this.items = [
          {
              label: 'Finder',
              icon: 'https://primefaces.org/cdn/primeng/images/dock/finder.svg'
          },
          {
              label: 'App Store',
              icon: 'https://www.pngfind.com/pngs/m/56-565024_amazon-logo-png-amazon-png-transparent-png.png',
              url:'https://amazon.com',
              target: '_blank'
          },
          {
              label: 'Photos',
              icon: 'https://primefaces.org/cdn/primeng/images/dock/photos.svg'
          },
          {
              label: 'Trash',
              icon: 'https://primefaces.org/cdn/primeng/images/dock/trash.png'
          }
      ];
  }
}
