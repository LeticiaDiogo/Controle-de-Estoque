import { ControleService } from './../Controle.service';
import { CadastroModel } from './model/Cadastro.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-Cadastro',
  templateUrl: './Cadastro.component.html',
  styleUrls: ['./Cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  cadastroForm!: FormGroup;

  constructor( private formBuilder: FormBuilder, private ControleService:ControleService) {

  }

  ngOnInit(): void{
    this.cadastroForm = this.formBuilder.group({
      nome:['',[Validators.required,Validators.pattern(/^[a-zA-Z]/)]],
      quantidade:['',[Validators.required,Validators.pattern(/[0-9]/)]],
      fornecedor:['',[Validators.required]],
      validade:['',[Validators.required]],
      categoria:['',[Validators.required]],

  })
}
  Cadastrar(){
    const cadastro = this.cadastroForm.getRawValue() as CadastroModel;
    cadastro.validade = new Date();
    this.ControleService.Cadastrar(cadastro);
  }

  get nomeProduto() {return this.cadastroForm.get("nome")!}
}
