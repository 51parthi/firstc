import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenFredomComponent } from './open-fredom.component';

describe('OpenFredomComponent', () => {
  let component: OpenFredomComponent;
  let fixture: ComponentFixture<OpenFredomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenFredomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenFredomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
