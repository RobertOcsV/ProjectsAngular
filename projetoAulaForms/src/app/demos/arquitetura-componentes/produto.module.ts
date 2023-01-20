import { ProdutoRoutingModule } from './produto.route';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProdutosDashboardComponent } from './produtos-dashboard/produtos-dashboard.component';

@NgModule({
declarations:[
    ProdutosDashboardComponent
],
imports:[
    CommonModule,
    ProdutoRoutingModule
],
exports:[]
})

export class ProdutoModule{}