import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',
    loadChildren: () => import('./navegacao/navegacao.module')
      .then(m => m.NavegacaoModule)
  },
  { path: 'administracao',
    loadChildren: () => import('./administracao/administracao.module')
      .then(m => m.AdministracaoModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
