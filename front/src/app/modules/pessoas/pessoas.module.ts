import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoasComponent } from './pessoas.component';
import { PessoasRoutingModule } from './pessoas-routing.module';
import { CriarPessoaComponent } from './criar-pessoa/criar-pessoa.component';
import { EditarPessoaComponent } from './editar-pessoa/editar-pessoa.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmComponent } from 'src/app/templates/confirm/confirm.component';
import { DeletarPessoaComponent } from './deletar-pessoa/deletar-pessoa.component';

import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    PessoasComponent,
    CriarPessoaComponent,
    EditarPessoaComponent,
    ConfirmComponent,
    DeletarPessoaComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    PessoasRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMomentDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
  ],
  exports: [PessoasComponent],
})
export class PessoasModule {}
