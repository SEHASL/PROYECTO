import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AvisosService } from 'src/app/Services/avisos.service';
import { GmailService } from 'src/app/Services/gmail.service';

@Component({
  selector: 'app-ncorreo',
  templateUrl: './ncorreo.component.html',
  styleUrls: ['./ncorreo.component.scss']
})
export class NcorreoComponent implements OnInit {

  ncorreo: FormGroup;
  indice: any;
  aux: any;
  total: any;
  submitted = false;
  @Input() correo: any;
  @Output() accionRealizada: EventEmitter<any> = new EventEmitter();
  
  constructor(private formBuilder: FormBuilder, private servicioAvisos: AvisosService, private gmail: GmailService) { }

  ngOnInit() {
      this.ncorreo = this.formBuilder.group({
        titulo: ['', [Validators.required, Validators.minLength(3)]],
        cuerpo: ['', [Validators.required, Validators.minLength(10)]],
        destinatario: ['', [Validators.required, Validators.email]],
      });
      
      var indice= this.correo.emisor.indexOf( "<" ) + 1;
      var total = (this.correo.emisor.length);
      if (indice != -1) {

      var  aux= this.correo.emisor.substr(indice,total - indice -1);
      }
    if(this.correo != undefined){
      this.ncorreo.patchValue({
        titulo: 'Re: '+ this.correo.titulo,
        destinatario: aux
      });
    }
  }

  get formulario() { return this.ncorreo.controls; }

  onSubmit() {
      this.submitted = true;

      if (this.ncorreo.invalid) {
          return;
      }

      let correo = this.ncorreo.value;

      const texto = correo.cuerpo;
      const destinatario = correo.destinatario;
      const asunto = correo.titulo;

      this.onReset();
      
      this.gmail.sendMessage(texto, destinatario, asunto).subscribe(
        (response) => {
          console.log("respuesta envio", response);
          this.servicioAvisos.showMenssage(`Correo enviado a ${correo.destinatario}`);
        },
        (error) => {
          this.servicioAvisos.showMenssage(`Fallo en el envio`);
        }
      );
  }

  onReset() {
      this.submitted = false;
      this.ncorreo.reset();
      this.accionRealizada.emit();
  }
  cancel(){
    this.onReset();
    this.servicioAvisos.showMenssage("Envio Cancelado");
  }

}
