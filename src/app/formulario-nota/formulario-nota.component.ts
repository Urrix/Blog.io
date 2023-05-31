import { Component, Output, EventEmitter } from '@angular/core';
import { Nota } from '../app.module';

@Component({
  selector: 'app-formulario-nota',
  templateUrl: './formulario-nota.component.html',
  styleUrls: ['./formulario-nota.component.css']
})
export class FormularioNotaComponent {
  @Output() notaCreada = new EventEmitter<Nota>();

  titulo: string = '';
  contenido: string = '';

  agregarNota() {
    const nuevaNota: Nota = {
      titulo: this.titulo,
      contenido: this.contenido
    };

    this.notaCreada.emit(nuevaNota);

    this.titulo = '';
    this.contenido = '';
  }
}
