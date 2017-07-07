import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomepageComponent} from "./app/components/homepage/homepage.component";
import {CategoryComponent} from "./app/components/category/category.component";

const routes: Routes = [
  {
    path: '', component: HomepageComponent
  },
  {
    path: ':category', component: CategoryComponent
  },
  {
    path: '*', redirectTo: '/'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutesModule{}
