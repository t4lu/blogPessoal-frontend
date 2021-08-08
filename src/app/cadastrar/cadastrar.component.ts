import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { userLogin } from '../model/userLogin';

import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuario: Usuario = new Usuario
  confirmarSenha: string
  usuarioTipo: string

  constructor(
    private authService: AuthService, //injecao de dependencias. //antes dos dois pontos é apenas uma variavel, mas preferi padronizar.
    private rota: Router
  ) { }

  ngOnInit(){
    window.scroll(0,0)
  }

  confirmSenha(event: any){
    this.confirmarSenha= event.target.value
  }

  tipoUsuario(event: any){
    this.usuarioTipo= event.target.value
  }

  cadastrar(){
    this.usuario.tipo= this.usuarioTipo

    if (this.usuario.senha != this.confirmarSenha){

      alert('As senhas não são iguais. Digite novamente.')

    } else {
      this.authService.cadastrar(this.usuario).subscribe((resp:Usuario) => {
        this.usuario = resp
        this.rota.navigate(['/logar'])
        alert('Cadastro finalizado. Sinta-se em casa! ♥')
      })
    }
  }
}