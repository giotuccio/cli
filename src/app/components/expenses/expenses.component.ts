import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/app/objects/expenses';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {
  expenses: Expense[] = []

  ngOnInit(): void {
    this.expenses = [

        {
          id: 1,
          amount: 2603,
          title: 'Amount Owed 1',
          collector: 'Amazon',
          severity: 'info',
          type: 'owed',
        },
        {
          id: 2,
          amount: 1350,
          title: 'Amount Owed 2',
          collector: 'eBay',
          severity: 'warning',
          type: 'paid',
        },
        {
          id: 3,
          amount: 420,
          title: 'Amount Owed 3',
          collector: 'Walmart',
          severity: 'error',
          type: 'pending',
        },
        {
          id: 4,
          amount: 750,
          title: 'Amount Owed 4',
          collector: 'Best Buy',
          severity: 'info',
          type: 'owed',
        },
        {
          id: 5,
          amount: 980,
          title: 'Amount Owed 5',
          collector: 'Target',
          severity: 'warning',
          type: 'paid',
        },
        {
          id: 6,
          amount: 200,
          title: 'Amount Owed 6',
          collector: 'Walmart',
          severity: 'error',
          type: 'pending',
        },
        {
          id: 7,
          amount: 1500,
          title: 'Amount Owed 7',
          collector: 'Amazon',
          severity: 'info',
          type: 'owed',
        },
        {
          id: 8,
          amount: 890,
          title: 'Amount Owed 8',
          collector: 'eBay',
          severity: 'warning',
          type: 'paid',
        },
        {
          id: 9,
          amount: 430,
          title: 'Amount Owed 9',
          collector: 'Best Buy',
          severity: 'error',
          type: 'pending',
        },
        {
          id: 10,
          amount: 670,
          title: 'Amount Owed 10',
          collector: 'Target',
          severity: 'info',
          type: 'owed',
        },
        {
          id: 11,
          amount: 1200,
          title: 'Amount Owed 11',
          collector: 'Amazon',
          severity: 'warning',
          type: 'paid',
        },
        {
          id: 12,
          amount: 520,
          title: 'Amount Owed 12',
          collector: 'eBay',
          severity: 'error',
          type: 'pending',
        },
        {
          id: 13,
          amount: 890,
          title: 'Amount Owed 13',
          collector: 'Walmart',
          severity: 'info',
          type: 'owed',
        },
        {
          id: 14,
          amount: 780,
          title: 'Amount Owed 14',
          collector: 'Best Buy',
          severity: 'warning',
          type: 'paid',
        },
        {
          id: 15,
          amount: 950,
          title: 'Amount Owed 15',
          collector: 'Target',
          severity: 'error',
          type: 'pending',
        },
        {
          id: 16,
          amount: 1100,
          title: 'Amount Owed 16',
          collector: 'Amazon',
          severity: 'info',
          type: 'owed',
        },
    ]
  }



}
