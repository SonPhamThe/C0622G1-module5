import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CardComponent} from './card/card.component';
import {CardCreateComponent} from './card-create/card-create.component';
import {CardEditComponent} from './card-edit/card-edit.component';
import {CardDeleteComponent} from './card-delete/card-delete.component';


const routes: Routes = [{
  path: '',
  component: CardComponent
},
  {
    path: 'card/create',
    component: CardCreateComponent
  }, {
    path: 'card/edit/:id',
    component: CardEditComponent
  }, {
    path: 'card/delete/:id',
    component: CardDeleteComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
