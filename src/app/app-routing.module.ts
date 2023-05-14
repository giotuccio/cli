import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { PicklistComponent } from './components/picklist/picklist.component';
import { ReviewComponent } from './components/review/review.component';
import { TrackingComponent } from './components/tracking/tracking.component';
import { PerformanceComponent } from './components/performance/performance.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'product-inventory', component: DataTableComponent },
  { path: 'expense-tracking', component: ExpensesComponent },
  { path: 'pricing', component: ReviewComponent },
  { path: 'tracking', component: TrackingComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'performance', component: PerformanceComponent }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
