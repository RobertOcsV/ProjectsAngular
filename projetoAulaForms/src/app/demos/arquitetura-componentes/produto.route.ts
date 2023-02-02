import { ProdutoAppComponent } from './produto.app.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EditarProdutoComponent } from "./editar-produto/editar-produto.component";
import { ProdutosDashboardComponent } from './produtos-dashboard/produtos-dashboard.component';
import { ProdutoResolve } from './services/produto.resolve';

const produtoRouterConfig: Routes = [
    { path:'', component: ProdutoAppComponent, 
    children: [
        { path: '', redirectTo: 'todos' },
        { 
            path:':estado', 
            component: ProdutosDashboardComponent,
            resolve: {
                produtos: ProdutoResolve
            }
         },
        { path:'editar/:id', component: EditarProdutoComponent }  
    ]}
   
];

@NgModule({
    imports: [ 
        RouterModule.forChild(produtoRouterConfig)
    ],
    exports: [RouterModule]
})
export class ProdutosRoutingModule { }