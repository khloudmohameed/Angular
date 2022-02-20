import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkilitemComponent } from './skilitem.component';

describe('SkilitemComponent', () => {
  let component: SkilitemComponent;
  let fixture: ComponentFixture<SkilitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkilitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkilitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
