import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PasswordFieldComponent } from './password-field/password-field.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import { StrengthMeterComponent } from './strength-meter/strength-meter.component';

@NgModule({
  declarations: [
    AppComponent,
    PasswordFieldComponent,
    StrengthMeterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatInputModule,
    MatSlideToggleModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
