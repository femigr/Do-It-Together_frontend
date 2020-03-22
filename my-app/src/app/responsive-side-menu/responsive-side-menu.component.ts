import { Component, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-responsive-side-menu',
  templateUrl: './responsive-side-menu.component.html',
  styleUrls: ['./responsive-side-menu.component.scss']
})
export class ResponsiveSideMenuComponent implements OnDestroy  {
  mobileQuery: MediaQueryList;

  navigationItems = [
    { label: 'Feed', routerLink: 'home', matIcon: 'local_activity'},
    { label: 'Aktivität', routerLink: 'create-activity', matIcon: 'add'}
  ];

  private mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }

}
