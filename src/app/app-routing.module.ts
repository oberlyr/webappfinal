import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { PrinterRequestComponent } from './printer-request/printer-request.component';
import { SignOrderComponent } from './sign-order/sign-order.component';
import { FixtureOrderComponent } from './fixture-order/fixture-order.component';
import { SkuOrderComponent } from './sku-order/sku-order.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'printer-request', component: PrinterRequestComponent },
  { path: 'sign-order', component: SignOrderComponent },
  { path: 'fixture-order', component: FixtureOrderComponent },
  { path: 'sku-order', component: SkuOrderComponent },
  { path: 'confirmation', component: ConfirmationComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}