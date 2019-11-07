import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngSlideToggleComponent } from './ang-slide-toggle.component';

describe('AngSlideToggleComponent', () => {
  let component: AngSlideToggleComponent;
  let fixture: ComponentFixture<AngSlideToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngSlideToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngSlideToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
