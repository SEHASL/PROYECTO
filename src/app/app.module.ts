import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CorreoComponent } from './Components/correo/correo.component';
import { LcorreoComponent } from './Components/lcorreo/lcorreo.component';
import { NcorreoComponent } from './Components/ncorreo/ncorreo.component';

@NgModule({
  declarations: [
    AppComponent,
    CorreoComponent,
    LcorreoComponent,
    NcorreoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
