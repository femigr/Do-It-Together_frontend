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
    { label: 'Feed', routerLink: 'home'},
    { label: 'Aktivität erstellen', routerLink: 'create-activity'}
  ];

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
}
