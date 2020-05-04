import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';

import { AppRoutingModule } from './app-routing.module';
import { PrinterRequestComponent } from './printer-request/printer-request.component';
import { SignOrderComponent } from './sign-order/sign-order.component';
import { FixtureOrderComponent } from './fixture-order/fixture-order.component';
import { SkuOrderComponent } from './sku-order/sku-order.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PrinterRequestComponent,
    SignOrderComponent,
    FixtureOrderComponent,
    SkuOrderComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule],

  bootstrap: [ AppComponent ]
})
export class AppModule { }