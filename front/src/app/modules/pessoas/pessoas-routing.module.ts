import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPessoaComponent } from './criar-pessoa/criar-pessoa.component';
import { DeletarPessoaComponent } from './deletar-pessoa/deletar-pessoa.component';
import { EditarPessoaComponent } from './editar-pessoa/editar-pessoa.component';
import { PessoasComponent } from './pessoas.component';

const routes: Routes = [
  {
    path: '',
    component: PessoasComponent,
  },
  {
    path: 'criar',
    component: CriarPessoaComponent,
  },
  {
    path: 'editar/:_id',
    component: EditarPessoaComponent,
  },
  {
    path: 'deletar/:_id',
    component: DeletarPessoaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PessoasRoutingModule {}
