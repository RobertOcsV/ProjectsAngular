import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EditarProdutoComponent } from "./editar-produto/editar-produto.component";
import { ProdutosDashboardComponent } from './produtos-dashboard/produtos-dashboard.component';

const produtoRouterConfig: Routes = [
    { path:'', component: ProdutosDashboardComponent },
    { path:'editar/:id', component: EditarProdutoComponent } 
];

@NgModule({
    imports: [ 
        RouterModule.forChild(produtoRouterConfig)
    ],
    exports: [RouterModule]
})
export class ProdutosRoutingModule { }