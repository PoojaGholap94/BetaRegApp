import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpModuleComponent } from './sign-up-module.component';

describe('SignUpModuleComponent', () => {
  let component: SignUpModuleComponent;
  let fixture: ComponentFixture<SignUpModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
