import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaNotasComponent } from './lista-notas/lista-notas.component';
import { FormularioNotaComponent } from './formulario-nota/formulario-nota.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaNotasComponent,
    FormularioNotaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
  FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export interface Nota {
  titulo: string;
  contenido: string;
}
