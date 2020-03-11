import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  operandoA: number;
  operandoB: number;
  @Output() sumar = new EventEmitter<number>();

  constructor() { }

  onSumar() {
    const suma = this.operandoA + this.operandoB;
    this.sumar.emit(suma);
  }
}
