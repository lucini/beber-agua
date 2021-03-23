import { PESO_AGUA_POR_KILO } from './../../constant/agua-kilo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora-agua',
  templateUrl: './calculadora-agua.component.html',
  styleUrls: ['./calculadora-agua.component.scss']
})
export class CalculadoraAguaComponent implements OnInit {

  titulo = 'Beba Água';
  peso: number;

  get litros(): number {
    if (this.peso) {
      return this.calcularLitros(this.peso);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  private calcularLitros(valor: number): number {
    return valor * PESO_AGUA_POR_KILO;
  }

}
