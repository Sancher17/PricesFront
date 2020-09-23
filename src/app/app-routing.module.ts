import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {ProductComponent} from './product/product.component';
import {MainComponent} from './main/main.component';
import {CategoryComponent} from './category/category.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: ':category/:id', component: ProductComponent},
  {path: 'notebook', component: CategoryComponent},
  {path: 'smartphone', component: CategoryComponent},
  {path: 'tv', component: CategoryComponent},
  {path: 'printer', component: CategoryComponent},
  {path: 'tablet', component: CategoryComponent},
  {path: 'console', component: CategoryComponent},
  {path: 'monitor', component: CategoryComponent},

  {path: '**', redirectTo: '/'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
