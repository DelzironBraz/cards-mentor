import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColumnPreviewComponent } from './_pages/components/column-preview/column-preview.component';
import { QrCodeComponent } from './_pages/components/qr-code/qr-code.component';
import { ProfileCardComponent } from './_pages/components/profile-card/profile-card.component';
import { PreviewProductComponent } from './_pages/components/preview-product/preview-product.component';
import { OrderSummaryComponent } from './_pages/components/order-summary/order-summary.component';
import { NftCardComponent } from './_pages/components/nft-card/nft-card.component';


const routes: Routes = [
  { path: '', component: ColumnPreviewComponent },
  { path: 'qr-code', component: QrCodeComponent },
  { path: 'profile-card', component: ProfileCardComponent },
  { path: 'preview-product', component: PreviewProductComponent },
  { path: 'order-summary', component: OrderSummaryComponent },
  { path: 'nft-card', component: NftCardComponent },
  { path: 'column-preview', component: ColumnPreviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
