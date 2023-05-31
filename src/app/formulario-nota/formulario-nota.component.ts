import { Component, EventEmitter, Output } from '@angular/core';
import { Nota } from '../app.module';
import { NotaService } from '../nota.service';

@Component({
  selector: 'app-formulario-nota',
  templateUrl: './formulario-nota.component.html',
  styleUrls: ['./formulario-nota.component.css']
})
export class FormularioNotaComponent {
  @Output() notaCreada = new EventEmitter<Nota>();

  titulo: string = '';
  contenido: string = '';

  constructor(private notaService: NotaService) { }

  agregarNota() {
    const nuevaNota: Nota = {
      titulo: this.titulo,
      contenido: this.contenido
    };

    this.notaService.agregarNota(nuevaNota);
    this.notaCreada.emit(nuevaNota);

    this.titulo = '';
    this.contenido = '';
  }
}
