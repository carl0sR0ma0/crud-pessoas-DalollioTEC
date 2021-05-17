import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Pessoa } from 'src/app/core/models/pessoa.model';
import { PessoaService } from 'src/app/core/services/pessoa.service';
import { ConfirmComponent } from 'src/app/templates/confirm/confirm.component';

@Component({
  selector: 'app-deletar-pessoa',
  templateUrl: './deletar-pessoa.component.html',
  styleUrls: ['./deletar-pessoa.component.css'],
})
export class DeletarPessoaComponent implements OnInit {
  private _http: Subscription;
  pessoa: Pessoa;
  id: string;

  constructor(
    private dialog: MatDialog,
    private _service: PessoaService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('_id');
    this.buscarPessoa();
  }

  excluirPessoa(): void {
    this._http = this._service.excluir(this.id).subscribe(
      (response) => {
        this._service.showMessage('Pessoa excluída com sucesso!!!');
        this._router.navigate(['/pessoas']);
      },
      (err) => {
        this._service.showMessage(err['message']);
      }
    );
  }

  yes(): void {
    this.buscarPessoa();
  }

  buscarPessoa(): void {
    this._service.listarUmaPessoa(this.id).subscribe((pessoa) => {
      this.pessoa = pessoa.body['pessoa'];
    });
  }

  no(): void {
    this._router.navigate(['/pessoas']);
  }
}
