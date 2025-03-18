import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListComponent } from './list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ListInvestimentsService } from '../../services/list-investiments.service';
import { MOCK_LIST } from '../../services/list.investiments.mock';
import { Investiments } from '../../model/investiments';
import { of } from 'rxjs';


describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let service: ListInvestimentsService;

   const mockList: Array<Investiments>= MOCK_LIST;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListComponent, HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    service = TestBed.inject(ListInvestimentsService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(U): should investiments have 4 elements && the first contain = Itaú && the last contain = Nubank', () => {
    spyOn(service, 'getList').and.returnValue(of(mockList));

    component.ngOnInit();
    fixture.detectChanges();

    expect(service.getList).toHaveBeenCalledWith();

    expect(component.investiments.length).toEqual(5);
    expect(component.investiments[0].name).toEqual('Banco 1');
    expect(component.investiments[4].name).toEqual('Banco 5');


  });

  it('(I): should investiments have 4 elements && the first == Itaú && the last == Nubank', ()=> {

    spyOn(service, 'getList').and.returnValue(of(mockList));

    component.ngOnInit();
    fixture.detectChanges();

    let investiments = fixture.debugElement.nativeElement.querySelectorAll('.list-itens');


    expect(investiments.length).toEqual(5);
    expect(investiments[0].textContent.trim()).toEqual('Banco 1 | 100');
    expect(investiments[4].textContent.trim()).toEqual('Banco 5 | 100');
  });

});
