import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedListEntryComponent } from './feed-list-entry.component';

describe('FeedListEntryComponent', () => {
  let component: FeedListEntryComponent;
  let fixture: ComponentFixture<FeedListEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedListEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedListEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
