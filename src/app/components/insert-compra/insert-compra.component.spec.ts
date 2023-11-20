import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertCompraComponent } from './insert-compra.component';

describe('InsertCompraComponent', () => {
  let component: InsertCompraComponent;
  let fixture: ComponentFixture<InsertCompraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsertCompraComponent]
    });
    fixture = TestBed.createComponent(InsertCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
