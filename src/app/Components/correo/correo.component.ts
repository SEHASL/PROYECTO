import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-correo',
  templateUrl: './correo.component.html',
  styleUrls: ['./correo.component.scss']
})
export class CorreoComponent implements OnInit {

  correo: any;
  constructor() { 
    this.correo = {
      titulo: "Titulo del Email",
      cuerpo: `Cuerpo del Email`,
      emisor: 'CorreoEmisor@gmail.com',
      destinatario: 'CorreoReceptor@gmail.com'
  }
  }

  ngOnInit(): void {
  }

}
