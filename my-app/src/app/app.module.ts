import { NgModule } from '@angular/core';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
//import material modules
import { MatListModule } from '@angular/material/list';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateActivityComponent } from './create-activity/create-activity.component';
import { DateSelectorComponent } from './date-selector/date-selector.component';
import { ResponsiveSideMenuComponent } from './responsive-side-menu/responsive-side-menu.component';
import { HomeComponent } from './home/home.component';
import { FeedListComponent } from './feed-list/feed-list.component';
import { FeedListEntryComponent } from './feed-list-entry/feed-list-entry.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

import {MatSelectModule} from '@angular/material/select';
import {MatNativeDateModule} from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    CreateActivityComponent,
    DateSelectorComponent,
    DateSelectorComponent,
    ResponsiveSideMenuComponent,
    HomeComponent,
    FeedListComponent,
    FeedListEntryComponent
  ],
  imports: [
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    ScrollingModule
  ],
  exports: [RouterModule],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
