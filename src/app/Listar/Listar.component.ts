import { ControleService } from './../Controle.service';
import { CadastroModel } from './../Cadastro/model/Cadastro.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Listar',
  templateUrl: './Listar.component.html',
  styleUrls: ['./Listar.component.css']
})
export class ListarComponent implements OnInit {

  cadastros!: CadastroModel[];

  clickedRow!: CadastroModel;

  constructor( private controleService: ControleService) { }

  ngOnInit(): void {

    this.cadastros = this.controleService.Listar()
  }

  Listar(): CadastroModel[] {
    return this.cadastros;
  }

  Remover(id:string): void {
    this.controleService.Remover(id);
  }

}
