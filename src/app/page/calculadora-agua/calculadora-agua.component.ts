import { RecipienteService } from './recipiente.service';
import { PESO_AGUA_POR_KILO } from './../../constant/agua-kilo';
import { Component, OnInit } from '@angular/core';
import { Recepiente } from 'src/app/model/recepiente';

@Component({
  selector: 'app-calculadora-agua',
  templateUrl: './calculadora-agua.component.html',
  styleUrls: ['./calculadora-agua.component.scss']
})
export class CalculadoraAguaComponent implements OnInit {

  recipientes: Recepiente[] = [];
  titulo = 'Beba Água';
  peso: number;

  get litros(): number {
    if (this.peso) {
      return this.calcularLitros(this.peso);
    }
  }

  constructor(private recipienteService: RecipienteService) { }

  ngOnInit(): void {
    this.getDados();
    this.recipientes.forEach(r => r.mililitro = this.calcularMl(r.litro));
  }

  private getDados(): void {
    this.recipienteService
      .findAll()
      .subscribe(val => this.recipientes = val);
  }

  private calcularLitros(valor: number): number {
    return valor * PESO_AGUA_POR_KILO;
  }

  private calcularMl(valorEmMl: number): number {
    return valorEmMl * 1000;
  }

}
