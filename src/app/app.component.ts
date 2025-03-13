import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BankingComponent } from "./shared/banking/banking.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BankingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  

}
