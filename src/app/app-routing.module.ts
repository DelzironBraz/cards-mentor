import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NftCardComponent } from './_pages/components/nft-card/nft-card.component';

const routes: Routes = [
  { path: '', component: NftCardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
