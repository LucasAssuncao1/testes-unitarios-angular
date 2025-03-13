import { Component } from '@angular/core';

@Component({
  selector: 'app-banking',
  standalone: true,
  imports: [],
  templateUrl: './banking.component.html',
  styleUrl: './banking.component.scss'
})
export class BankingComponent {

  private poupanca: number = 10;
  private carteira: number = 50;

  public getPoupanca(): number{
    return this.poupanca;
  }

  public getCarteira(): number{
    return this.carteira;
  }


  public setSacar(value: string): number{
    const sacar = Number(value);
    console.log(sacar);
    
    return sacar;
  }

  public setDepositar(value: string): number{
    const depositar = Number(value);
    console.log(depositar);
    
    return depositar;
  }
}
