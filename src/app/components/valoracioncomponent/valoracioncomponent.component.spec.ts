import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValoracioncomponentComponent } from './valoracioncomponent.component';

describe('ValoracioncomponentComponent', () => {
  let component: ValoracioncomponentComponent;
  let fixture: ComponentFixture<ValoracioncomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValoracioncomponentComponent]
    });
    fixture = TestBed.createComponent(ValoracioncomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
