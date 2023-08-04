import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColumnPreviewComponent } from './_pages/components/column-preview/column-preview.component';

const routes: Routes = [
  { path: '', component: ColumnPreviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
