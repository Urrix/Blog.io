import { Injectable } from '@angular/core';
import { Nota } from './app.module';

@Injectable({
  providedIn: 'root'
})
export class NotaService {
  private notas: Nota[] = [];

  constructor() {
    this.obtenerNotasDesdeLocalStorage();
  }

  agregarNota(nuevaNota: Nota) {
    this.notas.push(nuevaNota);
    this.guardarNotasEnLocalStorage();
  }

  obtenerNotas(): Nota[] {
    return this.notas;
  }

  private guardarNotasEnLocalStorage() {
    localStorage.setItem('notas', JSON.stringify(this.notas));
  }

  private obtenerNotasDesdeLocalStorage() {
    const notasGuardadas = localStorage.getItem('notas');
    if (notasGuardadas) {
      this.notas = JSON.parse(notasGuardadas);
    }
  }
}
