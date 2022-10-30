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

  CadastroForm!: FormGroup;

  constructor( private formBuilder: FormBuilder, private ControleService:ControleService) {

  }

  ngOnInit(): void{
    this.CadastroForm = this.formBuilder.group({
      Nome:['',[Validators.required]]
    })

  }

  Cadastrar(){
    const Cadastros = this.CadastroForm.getRawValue() as CadastroModel;

    this.ControleService.Cadastrar(Cadastros);

  }


}
