import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FounderVersion3Component } from './founder-version3.component';

describe('FounderVersion3Component', () => {
  let component: FounderVersion3Component;
  let fixture: ComponentFixture<FounderVersion3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FounderVersion3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FounderVersion3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
