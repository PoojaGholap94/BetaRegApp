import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignUpModuleComponent } from './sign-up-module/sign-up-module.component';
import { RegitrationFormComponent } from './regitration-form/regitration-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpModuleComponent,
    RegitrationFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
