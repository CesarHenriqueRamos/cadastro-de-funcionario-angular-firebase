import { Component, OnInit } from '@angular/core';
import { Funcionario } from '../funcionario';
import { FuncionarioDataService } from '../funcionario-data.service';
import { FuncionarioService } from '../funcionario.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  funcionario:Funcionario;
  key:string = '';
  constructor(
    private funcionarioService:FuncionarioService,
    private funcionariosDataService:FuncionarioDataService
  ) { }

  ngOnInit(): void {
    this.funcionario = new Funcionario();
    this.funcionariosDataService.funcionarioAtula.subscribe(data =>{
      if(data.funcionario && data.key){
        this.funcionario = new Funcionario();
        this.funcionario.nome = data.funcionario.nome;
        this.funcionario.departamento = data.funcionario.departamento;
        this.key = data.key;
      }
    })
  }
  onSubmit(){
    if(this.key){
      this.funcionarioService.update(this.funcionario, this.key);
    }else{
      this.funcionarioService.insert(this.funcionario);
    }
    this.funcionario = new Funcionario();
    this.key = null;
  }
}
