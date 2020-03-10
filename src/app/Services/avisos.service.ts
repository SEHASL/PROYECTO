import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AvisosService {

  mensaje: string;
  visible: boolean;

  constructor(private _snackBar: MatSnackBar) {}
  showMenssage(mensaje: string){
  this._snackBar.open(mensaje, 'Información', {
    duration: 2000,
  });
}
}
