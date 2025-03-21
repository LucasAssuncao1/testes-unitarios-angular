import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Investiments } from '../model/investiments';

@Injectable({
  providedIn: 'root'
})
export class ListInvestimentsService {

  private url:string = 'https://raw.githubusercontent.com/troquatte/fake-server/main/investiments-all.json'
  
  constructor() { }

  private http = inject(HttpClient);

  public getList (): Observable<Array<Investiments>>{
    return this.http.get<Array<Investiments>>(this.url).pipe(
      map(
        res => res
      )
    );
  }

}
