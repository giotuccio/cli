import { Component, OnInit } from '@angular/core';
import { Messages } from 'src/app/objects/messages';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css'],
})
export class NotificationsComponent implements OnInit {
  messages: Messages[] = [];

  ngOnInit() {
    this.messages = [
      { severity: 'success', summary: 'Success', detail: 'Customer Received Order' },
      { severity: 'info', summary: 'Info', detail: 'PRODUCT at Cosco is on sale buy THIS AMOUNT AND SAVE THIS AMOUNT' },
      { severity: 'warn', summary: 'Info', detail: 'Message Content' },
      { severity: 'error', summary: 'Info', detail: 'Message Content' },
      { severity: 'success', summary: 'Info', detail: 'Message Content' },
      { severity: 'info', summary: 'Info', detail: 'Message Content' },
      { severity: 'success', summary: 'Info', detail: 'Message Content' },
      { severity: 'info', summary: 'Info', detail: 'Message Content' },
    ];
  }
}
