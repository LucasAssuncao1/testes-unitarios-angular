import { Component, inject, Inject, OnInit } from '@angular/core';
import { Investiments } from '../../model/investiments';
import { CommonModule } from '@angular/common';
import { ListInvestimentsService } from '../../services/list-investiments.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit{

 constructor(){}

  public investiments !: Array<Investiments>;

  private listInvestimentsService = inject(ListInvestimentsService);

  ngOnInit(): void {
    this.listInvestimentsService
    .getList()
    .subscribe( (res) => (this.investiments = res))
  }


}
