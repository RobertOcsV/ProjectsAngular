import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProdutosDashboardComponent } from './produtos-dashboard/produtos-dashboard.component';

const produtoRouterConfig: Routes = [
    { path:'', component: ProdutosDashboardComponent } 
];

@NgModule({
    imports: [ 
        RouterModule.forChild(produtoRouterConfig)
    ],
    exports: [RouterModule]
})
export class ProdutoRoutingModule { }