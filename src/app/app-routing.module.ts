import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreviewProductComponent } from './_pages/components/preview-product/preview-product.component';

const routes: Routes = [
  { path: '', component: PreviewProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
