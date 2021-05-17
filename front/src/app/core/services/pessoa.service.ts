import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { Pessoa } from '../models/pessoa.model';
import { API_URL } from '../api';

@Injectable({
  providedIn: 'root',
})
export class PessoaService {
  constructor(private snackBar: MatSnackBar, private _http: HttpClient) {}

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  listarPessoas(): Observable<Pessoa[]> {
    return this._http.get<Pessoa[]>(`${API_URL}/pessoas/listar-todos`);
  }

  listarUmaPessoa(id: string): Observable<HttpResponse<Pessoa>> {
    return this._http.get<Pessoa>(`${API_URL}/pessoas/listarUm/${id}`, {
      observe: 'response',
    });
  }

  criarPessoa(body: Pessoa): Observable<HttpResponse<Pessoa>> {
    return this._http.post<Pessoa>(`${API_URL}/pessoas/criar`, body, {
      observe: 'response',
    });
  }

  alterar(id: string, body: Pessoa): Observable<HttpResponse<Pessoa>> {
    return this._http.put<Pessoa>(`${API_URL}/pessoas/atualizar/${id}`, body, {
      observe: 'response',
    });
  }

  excluir(id: string): Observable<HttpResponse<Pessoa>> {
    return this._http.delete<Pessoa>(`${API_URL}/pessoas/deletar/${id}`, {
      observe: 'response',
    });
  }
}
