import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FounderVersion1Component } from './founder-version1.component';

describe('FounderVersion1Component', () => {
  let component: FounderVersion1Component;
  let fixture: ComponentFixture<FounderVersion1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FounderVersion1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FounderVersion1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
