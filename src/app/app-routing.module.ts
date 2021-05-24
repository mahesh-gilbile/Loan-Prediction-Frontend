import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirsPageComponent } from './firs-page/firs-page.component';
import { OutputPageComponent } from './output-page/output-page.component';


const routes: Routes = [
  { path : '' , redirectTo:'/info' , pathMatch:'full'},
  { path : 'info' , component : FirsPageComponent },
  { path : 'output' , component : OutputPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
