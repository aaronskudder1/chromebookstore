import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetfileComponent } from './getfile.component';

describe('GetfileComponent', () => {
  let component: GetfileComponent;
  let fixture: ComponentFixture<GetfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetfileComponent]
    });
    fixture = TestBed.createComponent(GetfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
