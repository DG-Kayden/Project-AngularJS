import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnertComponent } from './partnert.component';

describe('PartnertComponent', () => {
  let component: PartnertComponent;
  let fixture: ComponentFixture<PartnertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartnertComponent]
    });
    fixture = TestBed.createComponent(PartnertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
