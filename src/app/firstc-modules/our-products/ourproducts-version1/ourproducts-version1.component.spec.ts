import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurproductsVersion1Component } from './ourproducts-version1.component';

describe('OurproductsVersion1Component', () => {
  let component: OurproductsVersion1Component;
  let fixture: ComponentFixture<OurproductsVersion1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurproductsVersion1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurproductsVersion1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
