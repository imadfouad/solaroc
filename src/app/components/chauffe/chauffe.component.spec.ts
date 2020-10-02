import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChauffeComponent } from './chauffe.component';

describe('ChauffeComponent', () => {
  let component: ChauffeComponent;
  let fixture: ComponentFixture<ChauffeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChauffeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChauffeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
