import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
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
    return this.http.post <userLogin>('http://localhost:4200/usuario/entrar', userLogin)

  }

  cadastrar(usuario:Usuario): Observable<Usuario>{
    return this.http.post <Usuario>('http://localhost:4200/usuario/cadastrar', Usuario)
  }

  logado (){
    let ok: boolean=false //ok é a declaracao da minha variavel para este metodo de deteccao do login do usuario.

    if (environment.token != ''){
      ok=true
    }
    return ok

  }
}
