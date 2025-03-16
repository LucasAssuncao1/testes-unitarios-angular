import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BankingComponent } from "./shared/banking/banking.component";
import { ListComponent } from './shared/investiments/components/list/list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BankingComponent, ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  

}
