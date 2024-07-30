import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { CollegeslistComponent } from './component/collegeslist/collegeslist.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"collegeslist",component:CollegeslistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
