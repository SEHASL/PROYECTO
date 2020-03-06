import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CorreoComponent } from './Components/correo/correo.component';
import { LcorreoComponent } from './Components/lcorreo/lcorreo.component';
import { NcorreoComponent } from './Components/ncorreo/ncorreo.component';
import { AvisoComponent } from './Components/aviso/aviso.component';
import { RcorreoComponent } from './Views/rcorreo/rcorreo.component';

@NgModule({
  declarations: [
    AppComponent,
    CorreoComponent,
    LcorreoComponent,
    NcorreoComponent,
    AvisoComponent,
    RcorreoComponent,
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
