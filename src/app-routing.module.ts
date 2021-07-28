import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './app/cadastrar/cadastrar.component';
import { EntrarComponent } from './app/entrar/entrar.component';

const routes: Routes = [
{path:'',
redirectTo:'entrar',
pathMatch:'full'
},

{path:'entrar',
component:EntrarComponent
},

{path:'cadastrar',
component:CadastrarComponent
}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
