import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './Views/inicio/inicio.component';
import { RcorreoComponent } from './Views/rcorreo/rcorreo.component';
import { EnviarComponent } from './Views/enviar/enviar.component';
import { CorreoComponent } from './Components/correo/correo.component';


const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'Inicio', component: InicioComponent },
  { path: 'Correos', component: RcorreoComponent },
  { path: 'Enviar', component: EnviarComponent },
  { path: 'Correo', component: CorreoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
