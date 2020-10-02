import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanneauxComponent } from './panneaux.component';

describe('PanneauxComponent', () => {
  let component: PanneauxComponent;
  let fixture: ComponentFixture<PanneauxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanneauxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanneauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
