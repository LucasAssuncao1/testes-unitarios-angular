import { Component } from '@angular/core';
import { Investiments } from '../model/investiments';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  public investiments: Array<Investiments> = [
    {
      name: "itaú",
      value: 100
    },
    {
      name: "BB",
      value: 100
    },
    {
      name: "Nubank",
      value: 100
    },
    {
      name: "XP",
      value: 100
    },
  ];

}
