import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent {
  dolar: number = 0;
  real: number = 0;
  
  converterParaReal(): void {
    this.dolar = this.real *  5.72 ;
  }

  converterParaDolar() {
    this.real = this.dolar *  0.20;
  }

}
