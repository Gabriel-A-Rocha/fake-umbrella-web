import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
  {
    path: 'report',
    component: ReportComponent,
  },
  {
    path: 'customer-list',
    component: CustomerListComponent,
  },
  {
    path: '',
    redirectTo: 'report',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
