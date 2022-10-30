import { CadastroModel } from './Cadastro/model/Cadastro.model';
import { Injectable } from '@angular/core';
import * as uuid from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class ControleService {


constructor() { }

Cadastrar(Cadastros:CadastroModel):void{
  Cadastros.id=uuid.v4();
  localStorage['Cadastros'] = JSON.stringify(Cadastros);

  console.log('[Cadastros]',localStorage['Cadastros']);


}

Listar(): CadastroModel[]{
  const Cadastros = localStorage['Cadastros']
  return Cadastros;
}



}

