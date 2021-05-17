import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Pessoa } from 'src/app/core/models/pessoa.model';
import { PessoaService } from 'src/app/core/services/pessoa.service';
import { ConfirmComponent } from 'src/app/templates/confirm/confirm.component';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css'],
})
export class PessoasComponent implements OnInit, OnDestroy {
  private _http: Subscription;
  pessoas: Pessoa[];

  displayedColumns = ['_id', 'nome', 'email', 'fone', 'acoes'];

  constructor(private _router: Router, private _service: PessoaService) {}

  ngOnInit(): void {
    this.listarPessoas();
  }

  ngOnDestroy(): void {
    this._http.unsubscribe();
  }

  navigateToProductCreate(): void {
    this._router.navigate(['/pessoas/criar']);
  }

  listarPessoas(): void {
    this._http = this._service.listarPessoas().subscribe(
      (response) => {
        this.pessoas = response['data'];
      },
      (err) => {
        this._service.showMessage(err['message']);
      }
    );
  }
}
