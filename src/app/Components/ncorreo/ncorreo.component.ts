import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ncorreo',
  templateUrl: './ncorreo.component.html',
  styleUrls: ['./ncorreo.component.scss']
})
export class NcorreoComponent implements OnInit {

  ncorreo: FormGroup;
  submitted = false;
  @Input() correo: any;
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.ncorreo = this.formBuilder.group({
        titulo: ['', [Validators.required, Validators.minLength(3)]],
        cuerpo: ['', [Validators.required, Validators.minLength(10)]],
        destinatario: ['', [Validators.required, Validators.email]],
      });
      
    if(this.correo != undefined){
      console.log("A",this.correo);
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

      alert("Correo Enviado \nEliminamos el formulario");
      this.onReset();
  }

  onReset() {
      this.submitted = false;
      this.ncorreo.reset();
  }

}
