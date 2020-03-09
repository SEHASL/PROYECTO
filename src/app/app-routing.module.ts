import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './Views/inicio/inicio.component';
import { RcorreoComponent } from './Views/rcorreo/rcorreo.component';
import { EnviarComponent } from './Views/enviar/enviar.component';
import { CorreoComponent } from './Components/correo/correo.component';


const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'home', component: InicioComponent },
  { path: 'mails', component: RcorreoComponent },
  { path: 'send', component: EnviarComponent },
  { path: 'mail', component: CorreoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
