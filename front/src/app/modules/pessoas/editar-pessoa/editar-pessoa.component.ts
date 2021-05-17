import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Pessoa } from 'src/app/core/models/pessoa.model';
import { PessoaService } from 'src/app/core/services/pessoa.service';

@Component({
  selector: 'app-editar-pessoa',
  templateUrl: './editar-pessoa.component.html',
  styleUrls: ['./editar-pessoa.component.css'],
})
export class EditarPessoaComponent implements OnInit, OnDestroy {
  private _http: Subscription;
  pessoa: Pessoa;
  pessoaFormGroup: FormGroup;
  id: string;

  constructor(
    private _service: PessoaService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _builder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('_id');
    this._http = this._service.listarUmaPessoa(this.id).subscribe((pessoa) => {
      this.pessoa = pessoa.body['pessoa'];
      this.populateFormGroup();
    });
    this.iniciarNovaPessoaFormGroup();
  }

  ngOnDestroy(): void {
    this._http.unsubscribe();
  }

  iniciarNovaPessoaFormGroup(): void {
    this.pessoaFormGroup = this._builder.group({
      nome: this._builder.control(null),
      cpf: this._builder.control(null, [Validators.required]),
      fone: this._builder.control(null, [Validators.required]),
      email: this._builder.control(null, [Validators.required]),
      data_nasc: this._builder.control(null),
      endereco: this._builder.control(null),
      obs: this._builder.control(null),
    });
  }

  populateFormGroup(): void {
    this.pessoaFormGroup.patchValue({
      nome: this.pessoa['nome'],
      cpf: this.pessoa['cpf'],
      fone: this.pessoa['fone'],
      email: this.pessoa['email'],
      data_nasc: this.pessoa['data_nasc'],
      endereco: this.pessoa['endereco'],
      obs: this.pessoa['obs'],
    });
  }

  alterarPessoa(): void {
    this._http = this._service
      .alterar(this.id, this.pessoaFormGroup.value)
      .subscribe(
        () => {
          this._service.showMessage('Pessoa alterada com sucesso!!!');
          this._router.navigate(['/pessoas']);
        },
        (err) => {
          this._service.showMessage(err['message']);
        }
      );
  }

  cancel(): void {
    this._router.navigate(['/pessoas']);
  }
}
