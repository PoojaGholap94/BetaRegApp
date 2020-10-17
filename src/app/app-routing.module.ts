import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { SignUpModuleComponent } from './sign-up-module/sign-up-module.component';

const routes: Routes = [
  { path: '', redirectTo: 'signup', pathMatch: 'full' },
  { path: 'signup', component: SignUpModuleComponent },
  { path: 'register/:name/:email', component: RegistrationFormComponent },
  { path: 'thankyou', component: ThankYouComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
