import { Component } from '@angular/core';
import { ListComponent } from "../investiments/list/list.component";

@Component({
  selector: 'app-banking',
  standalone: true,
  imports: [ListComponent],
  templateUrl: './banking.component.html',
  styleUrl: './banking.component.scss',
})

export class BankingComponent {
  private poupanca: number = 10;
  private carteira: number = 50;

  public getPoupanca(): number {
    return this.poupanca;
  }

  public getCarteira(): number {
    return this.carteira;
  }

  public setSacar(value: string): number | undefined {
    const sacar = Number(value);

    if (isNaN(sacar) || this.poupanca < sacar) {
      return;
    }
    this.poupanca -= sacar;

    console.log(sacar);
    return (this.carteira += sacar);
  }

  public setDepositar(value: string): number | undefined {
    const depositar = Number(value);

    if (isNaN(depositar) || this.carteira < depositar) {
      return;
    }
    this.carteira -= depositar;

    console.log(depositar);
    return (this.poupanca += depositar);
  }
}
