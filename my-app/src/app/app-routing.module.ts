import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateActivityComponent } from './create-activity/create-activity.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'create-activity', component: CreateActivityComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
