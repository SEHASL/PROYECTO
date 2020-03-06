import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AvisosService } from 'src/app/Services/avisos.service';

@Component({
  selector: 'app-ncorreo',
  templateUrl: './ncorreo.component.html',
  styleUrls: ['./ncorreo.component.scss']
})
export class NcorreoComponent implements OnInit {

  ncorreo: FormGroup;
  submitted = false;
  @Input() correo: any;
  @Output() accionRealizada: EventEmitter<any> = new EventEmitter();
  
  constructor(private formBuilder: FormBuilder, private servicioAvisos: AvisosService) { }

  ngOnInit() {
      this.ncorreo = this.formBuilder.group({
        titulo: ['', [Validators.required, Validators.minLength(3)]],
        cuerpo: ['', [Validators.required, Validators.minLength(10)]],
        destinatario: ['', [Validators.required, Validators.email]],
      });
      
    if(this.correo != undefined){
      this.ncorreo.patchValue({
        titulo: 'Re: '+ this.correo.titulo, 
        destinatario: this.correo.emisor
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
      correo.leido= false;
      correo.emisor= 'correoEmisor1@openWebinar.inv';

      this.onReset();
      this.servicioAvisos.showMenssage(`Correo enviado a ${correo.emisor}`);;
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
