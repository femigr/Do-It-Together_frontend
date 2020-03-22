import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateActivityComponent } from './create-activity/create-activity.component';
import { FeedListComponent } from './feed-list/feed-list.component';
import { LandingpageComponent } from './landingpage/landingpage.component';


const routes: Routes = [
  { path: 'home', component: FeedListComponent },
  { path: 'create-activity', component: CreateActivityComponent },
  { path: 'landing', component: LandingpageComponent },
  { path: '**', redirectTo: 'landing', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
