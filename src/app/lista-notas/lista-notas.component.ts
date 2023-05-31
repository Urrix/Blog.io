import { Component } from '@angular/core';
import { Nota } from '../app.module';
import { NotaService } from '../nota.service';

@Component({
  selector: 'app-lista-notas',
  templateUrl: './lista-notas.component.html',
  styleUrls: ['./lista-notas.component.css']
})
export class ListaNotasComponent {
  notas: Nota[] = [];

  constructor(private notaService: NotaService) {
    this.notas = this.notaService.obtenerNotas();
  }

  agregarNota(nuevaNota: Nota) {
    this.notaService.agregarNota(nuevaNota);
  }
}
