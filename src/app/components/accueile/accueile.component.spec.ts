import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueileComponent } from './accueile.component';

describe('AccueileComponent', () => {
  let component: AccueileComponent;
  let fixture: ComponentFixture<AccueileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccueileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
