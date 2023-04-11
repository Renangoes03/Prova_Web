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
    this.dolar = this.real *  5.72 ;
  }

  converterParaDolar() {
    this.real = this.dolar *  0.20;
  }

  converterParaEuro(): void {
    this.peso = this.euro *  0.18 ;
  }
  converterParaPeso(): void {
    this.euro = this.peso *  0.0043 ;
  }
  
  converterParaAfegao(): void {
    this.ariay = this.afegao *  1 ;
  }
  
  converterParaAriay(): void {
    this.afegao = this.ariay *  50.43 ;
  }
}
