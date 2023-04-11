import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent {
  dolar: number = 0;
  real: number = 0;
  euro: number = 0;
  peso: number = 0;
  afegao: number = 0;
  ariay:  number = 0;

  converterParaReal(): void {
    this.dolar = this.real *  0.20;
  }
  converterParaDolar() {
    this.real = this.dolar *  5.03;
    this.real = this.dolar /  5.03;
  }

  converterParaEuro(): void {
    this.peso = this.euro *  5.46 ;
  }
  converterParaPeso(): void {
    this.euro = this.peso *  0.23 ;
  } 
  converterParaAfegao(): void {
    this.ariay = this.afegao *  1 ;
  } 
  converterParaAriay(): void {
    this.afegao = this.ariay *  50.43 ;
  }
}
