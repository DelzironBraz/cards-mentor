import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderSummaryComponent } from './_pages/components/order-summary/order-summary.component';
import { QrCodeComponent } from './_pages/components/qr-code/qr-code.component';

const routes: Routes = [
  { path: '', component: QrCodeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
