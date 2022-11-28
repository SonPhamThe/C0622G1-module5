import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductDeleteComponent } from './product-delete/product-delete.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductListComponent } from './product-list/product-list.component';


const routes: Routes = [{
  path: 'product/list',
  component: ProductListComponent
},{
  path: 'product/create',
  component: ProductCreateComponent
},{
  path: 'product/edit/:id',
  component: ProductEditComponent
}, {
  path: 'product/delete/:id',
  component: ProductDeleteComponent
}];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
