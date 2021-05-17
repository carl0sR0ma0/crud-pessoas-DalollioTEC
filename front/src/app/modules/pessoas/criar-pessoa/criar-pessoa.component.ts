import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Pessoa } from 'src/app/core/models/pessoa.model';
import { PessoaService } from 'src/app/core/services/pessoa.service';

@Component({
  selector: 'app-criar-pessoa',
  templateUrl: './criar-pessoa.component.html',
  styleUrls: ['./criar-pessoa.component.css'],
})
export class CriarPessoaComponent implements OnInit, OnDestroy {
  private _http: Subscription;
  pessoaFormGroup: FormGroup;

  constructor(
    private _service: PessoaService,
    private _router: Router,
    private _builder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.iniciarNovaPessoaFormGroup();
  }

  ngOnDestroy(): void {}

  iniciarNovaPessoaFormGroup(): void {
    this.pessoaFormGroup = this._builder.group({
      nome: this._builder.control(null, [Validators.required]),
      cpf: this._builder.control(null, [Validators.required]),
      fone: this._builder.control(null, [Validators.required]),
      email: this._builder.control(null, [Validators.required]),
      data_nasc: this._builder.control(null),
      endereco: this._builder.control(null),
      obs: this._builder.control(null),
    });
  }

  criarPessoa(): void {
    this._http = this._service
      .criarPessoa(this.pessoaFormGroup.value)
      .subscribe(
        () => {
          this._service.showMessage('Pessoa cadastrada com Sucesso!!!');
          this._router.navigate(['/pessoas']);
        },
        (err) => {
          this._service.showMessage(err.error['message']);
        }
      );
  }

  cancel(): void {
    this._router.navigate(['/pessoas']);
  }
}
