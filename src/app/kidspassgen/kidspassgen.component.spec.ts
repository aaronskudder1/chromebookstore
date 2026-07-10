import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidspassgenComponent } from './kidspassgen.component';

describe('KidspassgenComponent', () => {
  let component: KidspassgenComponent;
  let fixture: ComponentFixture<KidspassgenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KidspassgenComponent]
    });
    fixture = TestBed.createComponent(KidspassgenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
