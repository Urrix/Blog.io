import { Component, OnInit } from '@angular/core';
import { Nota } from '../app.module';
import { NotaService } from '../nota.service';

@Component({
  selector: 'app-lista-notas',
  templateUrl: './lista-notas.component.html',
  styleUrls: ['./lista-notas.component.css']
})
export class ListaNotasComponent implements OnInit {
  notas: Nota[] = [];

  constructor(private notaService: NotaService) { }

  ngOnInit(): void {
    this.notas = this.notaService.obtenerNotas();
  }

  agregarNota(nuevaNota: Nota) {
    this.notaService.agregarNota(nuevaNota);
    this.notas = this.notaService.obtenerNotas();
  }
}
