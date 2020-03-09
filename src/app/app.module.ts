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
import { LoginComponent } from './Components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import {
  GoogleApiModule,
  NgGapiClientConfig,
  NG_GAPI_CONFIG,
  GoogleApiConfig
} from "ng-gapi";
import { MenuComponent } from './Menu/menu/menu.component';
import { EnviarComponent } from './Views/enviar/enviar.component';
import { InicioComponent } from './Views/inicio/inicio.component';
import { VcorreoComponent } from './Views/vcorreo/vcorreo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

let gapiClientConfig: NgGapiClientConfig = {
  client_id: "395684135333-7cs6mldgfgr2q531bu51el0j4hdosv0s.apps.googleusercontent.com",
  discoveryDocs: ["https://analyticsreporting.googleapis.com/$discovery/rest?version=v4"],
  ux_mode: "popup",
  redirect_uri: "http://localhost:4200/loged",
  scope: [
    "https://www.googleapis.com/auth/userinfo.profile",
    "https://www.googleapis.com/auth/userinfo.email",
    "https://www.googleapis.com/auth/gmail.labels",
    "https://www.googleapis.com/auth/gmail.send",
    "https://www.googleapis.com/auth/gmail.readonly"
  ].join(" ")
};

@NgModule({
  declarations: [
    AppComponent,
    CorreoComponent,
    LcorreoComponent,
    NcorreoComponent,
    AvisoComponent,
    RcorreoComponent,
    LoginComponent,
    MenuComponent,
    EnviarComponent,
    InicioComponent,
    VcorreoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    GoogleApiModule.forRoot({
      provide: NG_GAPI_CONFIG,
      useValue: gapiClientConfig
    }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
