import { BarComponent } from './demos/bar-di-zones/bar.component';
import { NotFoundComponent } from './navegacao/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { CadastroComponent } from './demos/reactiveforms/cadastro/cadastro.component';
import { AuthGuard } from './services/app.guard';
import { CadastroGuard } from './services/cadastro.guard';
import { FilmesComponent } from './demos/pipes/filmes/filmes.component';
import { TodoComponent } from './demos/todo-list/todo.component';



 const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'sobre', component: SobreComponent },
    { path: 'filmes', component: FilmesComponent },
    { path: 'cadastro', component: CadastroComponent, canDeactivate: [CadastroGuard] },
    { path: 'bar', component: BarComponent },
    { path: 'todo', component: TodoComponent },
    {
    path: 'produtos',  
    loadChildren: () => import('./demos/arquitetura-componentes/produto.module')
    .then(m => m.ProdutoModule)
    },
    {
    path: 'admin',  
    loadChildren: () => import('./admin/admin.module')
    .then(m => m.AdminModule),
    canLoad: [AuthGuard], canActivate: [AuthGuard] },

    { path: '**', component: NotFoundComponent}
];


@NgModule({
    imports:[
        RouterModule.forRoot(rootRouterConfig, {enableTracing: false})
    ],
    exports:[
      RouterModule  
    ]
})
export class AppRoutingModule{}