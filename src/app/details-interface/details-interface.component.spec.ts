import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsInterfaceComponent } from './details-interface.component';

describe('DetailsInterfaceComponent', () => {
  let component: DetailsInterfaceComponent;
  let fixture: ComponentFixture<DetailsInterfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsInterfaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
