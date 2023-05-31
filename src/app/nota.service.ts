import { Injectable } from '@angular/core';
import { Nota } from './app.module';

@Injectable({
  providedIn: 'root'
})
export class NotaService {
  private notas: Nota[] = [];

  agregarNota(nuevaNota: Nota) {
    this.notas.push(nuevaNota);
  }

  obtenerNotas(): Nota[] {
    return this.notas;
  }
}
