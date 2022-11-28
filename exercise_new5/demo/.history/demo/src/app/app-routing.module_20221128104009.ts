import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


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
