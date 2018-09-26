import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BakeComponent } from './bake/bake.component';
import { EatComponent } from './eat/eat.component';
import { CountComponent } from './count/count.component';
const routes: Routes = [
  {
    path: 'bake',
    component: BakeComponent
  },
  {
    path: 'eat',
    component: EatComponent
  },
  {
      path: 'count',
      component: CountComponent
   },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
