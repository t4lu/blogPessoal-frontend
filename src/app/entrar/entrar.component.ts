import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { userLogin } from '../model/userLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  userLogin: userLogin = new userLogin()

  constructor(
    private authService: AuthService, //antes dos dois pontos é apenas uma variavel, mas preferi padronizar.
    private rota: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  entrar(){
    this.authService.entrar(this.userLogin).subscribe((resp:userLogin) => {
      this.userLogin = resp

      environment.token = this.userLogin.token
      environment.nome = this.userLogin.nome
      environment.foto = this.userLogin.foto
      environment.id = this.userLogin.id
      environment.usuario = this.userLogin.usuario

      //para checar as variaveis inseridas pelo usuario:
      console.log(environment.token)
      console.log(environment.nome)
      console.log(environment.foto)
      console.log(environment.id)
      console.log(environment.usuario)


      this.rota.navigate(['/inicio'])
    }, erro => {
      if (erro.status == 500){
        alert('Usuário ou senha incorreto(a).')
      }
    })
  }
}