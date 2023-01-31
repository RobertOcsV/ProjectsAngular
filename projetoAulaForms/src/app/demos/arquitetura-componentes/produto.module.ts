import { ProdutoCountComponent } from './components/produto-count.component';
import { ProdutosRoutingModule } from './produto.route';
import { NgModule } from "@angular/core";

import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import { CommonModule, registerLocaleData } from "@angular/common";
import { ProdutosDashboardComponent } from './produtos-dashboard/produtos-dashboard.component';
import { ProdutoDetalheComponent } from './components/produto-card-detalhe.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';

@NgModule({
declarations:[
    ProdutosDashboardComponent,
    ProdutoDetalheComponent,
    ProdutoCountComponent,
    EditarProdutoComponent
],
imports:[
    CommonModule,
    ProdutosRoutingModule
],
exports:[]
})

export class ProdutoModule{}