import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Funcionario } from './funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioDataService {

  constructor() { }
  private funcionarioSorce = new BehaviorSubject({funcionario:null,key:''});
  funcionarioAtula = this.funcionarioSorce.asObservable();

  obtemFuncionario(funcionario: Funcionario, key:string){
    this.funcionarioSorce.next({funcionario:funcionario, key:key});
  }
}
