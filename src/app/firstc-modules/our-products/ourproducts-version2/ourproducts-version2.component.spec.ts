import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurproductsVersion2Component } from './ourproducts-version2.component';

describe('OurproductsVersion2Component', () => {
  let component: OurproductsVersion2Component;
  let fixture: ComponentFixture<OurproductsVersion2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurproductsVersion2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurproductsVersion2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
