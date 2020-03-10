import { Component, OnInit } from '@angular/core';
import { GmailService } from 'src/app/Services/gmail.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lcorreo',
  templateUrl: './lcorreo.component.html',
  styleUrls: ['./lcorreo.component.scss']
})
export class LcorreoComponent implements OnInit {

  correos: any[];

  constructor(private gmail: GmailService, private router: Router) {
    this.correos = [];
  }

  ngOnInit() {
    this.getRecibidos();
  }

  clickResponder(correo) {
    correo.responder = !correo.responder;
  }

  accionRespuestaRapida(correo) {
    correo.responder = false;
  }

  getRecibidos() {
    this.gmail.getRecibidos().subscribe(
      (response) => {
        const mensajes = response.messages;
        
        mensajes.forEach(element => {
          this.getMensaje(element.id);
        });
      },
      (error) => this.error(error)
    );
  }

  getMensaje(id: string){
    this.gmail.getMessage(id).subscribe(
      (response) => {
        const emisor = response.payload.headers.find(e => e.name === "From");
        const subject = response.payload.headers.find(e => e.name === "Subject");

        const mensage = {
          id: response.id,
          cuerpo: response.snippet,
          emisor: emisor? emisor.value : undefined,
          titulo: subject? subject.value : undefined,
        };
        this.correos.push(mensage);
      },
      (error) => this.error(error)
    );
  }

  error(error){
    console.warn("ERROR");
  }
  verDetalle(correo){
    this.router.navigate(['/Correo', {correo: JSON.stringify(correo)}]);
  }
}
