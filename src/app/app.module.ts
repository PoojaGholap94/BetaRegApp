import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SignUpModuleComponent } from './sign-up-module/sign-up-module.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

// import { AngularFontAwesomeModule } from 'angular-font-awesome';
@NgModule({
  declarations: [
    AppComponent,
    SignUpModuleComponent,
    ThankYouComponent,
    RegistrationFormComponent
  ],
  imports: [
    BrowserModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
