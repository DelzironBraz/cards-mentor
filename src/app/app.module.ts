import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreviewProductComponent } from './_pages/components/preview-product/preview-product.component';
import { NftCardComponent } from './_pages/components/nft-card/nft-card.component';
import { OrderSummaryComponent } from './_pages/components/order-summary/order-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    PreviewProductComponent,
    NftCardComponent,
    OrderSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
