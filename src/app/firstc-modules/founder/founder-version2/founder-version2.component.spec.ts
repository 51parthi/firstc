import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FounderVersion2Component } from './founder-version2.component';

describe('FounderVersion2Component', () => {
  let component: FounderVersion2Component;
  let fixture: ComponentFixture<FounderVersion2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FounderVersion2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FounderVersion2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
