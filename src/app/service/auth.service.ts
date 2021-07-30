import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userLogin } from '../model/userLogin';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar(userLogin: userLogin): Observable<userLogin>{ //garante que irá receber e aceitar somente os parametros do meu objeto.
    return this.http.post <userLogin>('http://localhost:4200/usuario/logar', userLogin)

  }

  cadastrar(usuario:Usuario): Observable<Usuario>{
    return this.http.post <Usuario>('http://localhost:4200/usuario/cadastrar', Usuario)
  }
}
