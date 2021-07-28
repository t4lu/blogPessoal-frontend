import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path:'',
  redirectTo:'entrar',
  pathMatch:'full'
  },

  {path:'entrar',
  component: EntrarComponent
  },

  {path:'cadastrar',
  component:CadastrarComponent
}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
