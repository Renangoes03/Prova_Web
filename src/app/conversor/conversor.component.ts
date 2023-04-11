import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent {
  dolar: number = 5.03;
  real: number = 0.20;
  euro: number = 5.46;
  peso: number = 0.023;
  afegao: number = 0.058;
  ariay:  number = 0.011;

  converterParaReal(): void {
    this.dolar = this.real *  0.20;
  }
  converterParaDolar() {
    this.real = this.dolar *  5.03;
    this.real = this.dolar /  5.03;
  }

  converterParaEuro(): void {
    this.peso = this.euro *  5.46 ;
    this.peso = this.euro /  5.46 ;
  }
  converterParaPeso(): void {
    this.euro = this.peso *  0.023 ;
    this.euro = this.peso /  0.023 ;
  } 
  converterParaAfegao(): void {
    this.ariay = this.afegao * 0.058 ;
    this.ariay = this.afegao / 0.058 ;
  } 
  converterParaAriay(): void {
    this.afegao = this.ariay *  0.0011 ;
    this.afegao = this.ariay /  0.0011 ;
  }
}
