import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfoliitemComponent } from './portfoliitem.component';

describe('PortfoliitemComponent', () => {
  let component: PortfoliitemComponent;
  let fixture: ComponentFixture<PortfoliitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfoliitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfoliitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
