import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingComponent } from './banking.component';
import { ListComponent } from '../investiments/components/list/list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BankingComponent', () => {
  let component: BankingComponent;
  let fixture: ComponentFixture<BankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankingComponent, ListComponent, HttpClientTestingModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(U) getPoupanca(): should have = 10', () => {
    expect(component.getPoupanca()).toEqual(10);
  });

  it('(U) getCarteira(): should have = 50', () => {
    expect(component.getCarteira()).toEqual(50);
  });

  it('(U) setSacar(): should transfer from poupanca to carteira', () => {
    component.setSacar('10');
    expect(component.getPoupanca()).toEqual(0);
    expect(component.getCarteira()).toEqual(60);
  });

  it(`
    (U) setSacar(): should transfer from poupanca not allowed string(isNaN)
     or poupanca < value`, () => {
    expect(component.setSacar('string')).not.toBeTruthy();
    expect(component.setSacar('100')).not.toBeTruthy();

    expect(component.getPoupanca()).toEqual(10);
    expect(component.getCarteira()).toEqual(50);

  });

  it('(I) setSacar(): should transfer from poupanca to carteira', () => {
    let element = fixture.debugElement.nativeElement;

    element.querySelector('#input-sacar').value = ('10');
    element.querySelector('#sacar').click();
    fixture.detectChanges();

    expect(element.querySelector('#get-carteira').textContent.trim()).toEqual('60');
  });

  it('(U) setDepositar(): should transfer from carteira to poupanca', () => {
    component.setDepositar('50');
    expect(component.getCarteira()).toEqual(0);
    expect(component.getPoupanca()).toEqual(60);
  });

  it(`
    (U) setDepositar(): should transfer from carteira not allowed string(isNaN)
     or carteira < value`, () => {
    expect(component.setDepositar('string')).not.toBeTruthy();
    expect(component.setDepositar('100')).not.toBeTruthy();

    expect(component.getPoupanca()).toEqual(10);
    expect(component.getCarteira()).toEqual(50);

  });

  it('(I) setDepositar(): should transfer from carteira to poupanca', () => {
    let element = fixture.debugElement.nativeElement;

    element.querySelector('#input-depositar').value = '10';
    element.querySelector('#depositar').click();
    fixture.detectChanges();

    expect(element.querySelector('#get-poupanca').textContent.trim()).toEqual('20');
  });
});
