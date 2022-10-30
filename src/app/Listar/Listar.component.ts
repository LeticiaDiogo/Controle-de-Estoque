import { ControleService } from './../Controle.service';
import { CadastroModel } from './../Cadastro/model/Cadastro.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Listar',
  templateUrl: './Listar.component.html',
  styleUrls: ['./Listar.component.css']
})
export class ListarComponent implements OnInit {

  Cadastros!:CadastroModel[];

  constructor( private ControleService: ControleService) { }

  ngOnInit(): void {

    this.Cadastros= this.ControleService.Listar();
  }

  Listar(): CadastroModel[]{
    return this.Cadastros;
  }

}
