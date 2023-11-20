import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcascuboComponent } from './marcascubo.component';

describe('MarcascuboComponent', () => {
  let component: MarcascuboComponent;
  let fixture: ComponentFixture<MarcascuboComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarcascuboComponent]
    });
    fixture = TestBed.createComponent(MarcascuboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
