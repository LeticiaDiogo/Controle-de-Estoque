import * as uuid from 'uuid';
import { Injectable } from '@angular/core';
import { CadastroModel } from './Cadastro/model/Cadastro.model';


@Injectable({
  providedIn: 'root'
})
export class ControleService {



constructor() {}

Cadastrar(cadastro: CadastroModel): void {
  let cadastros:CadastroModel[] = this.Listar();
  cadastro.id = uuid.v4();
  cadastros.push(cadastro);
  console.log(cadastros);
  localStorage.setItem('cadastros', JSON.stringify(cadastros));

}

Listar(): CadastroModel [] {

   return JSON.parse(localStorage.getItem('cruds')!) as CadastroModel[] ?? [];
}



}
