import { AppComponent } from './app.component';
import { ListarComponent } from './Listar/Listar.component';
import { CadastroComponent } from './Cadastro/Cadastro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path:'Cadastro', component: CadastroComponent
  },
  {
    path:'Listar', component:ListarComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
