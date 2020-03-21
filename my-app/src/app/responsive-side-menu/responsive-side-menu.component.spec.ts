import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveSideMenuComponent } from './responsive-side-menu.component';

describe('ResponsiveSideMenuComponent', () => {
  let component: ResponsiveSideMenuComponent;
  let fixture: ComponentFixture<ResponsiveSideMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsiveSideMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiveSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
