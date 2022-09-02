import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FounderVersion4Component } from './founder-version4.component';

describe('FounderVersion4Component', () => {
  let component: FounderVersion4Component;
  let fixture: ComponentFixture<FounderVersion4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FounderVersion4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FounderVersion4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
