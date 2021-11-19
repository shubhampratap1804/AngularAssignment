import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontPageComponent } from './component/front-page/front-page.component';


const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
