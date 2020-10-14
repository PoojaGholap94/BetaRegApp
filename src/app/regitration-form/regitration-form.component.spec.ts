import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegitrationFormComponent } from './regitration-form.component';

describe('RegitrationFormComponent', () => {
  let component: RegitrationFormComponent;
  let fixture: ComponentFixture<RegitrationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegitrationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegitrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
