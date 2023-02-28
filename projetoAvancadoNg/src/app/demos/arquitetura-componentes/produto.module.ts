import { ProdutoAppComponent } from './produto.app.component';
import { ProdutoCountComponent } from './components/produto-count.component';
import { ProdutosRoutingModule } from './produto.route';
import { NgModule } from "@angular/core";


import { CommonModule, registerLocaleData } from "@angular/common";
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);


import { ProdutosDashboardComponent } from './produtos-dashboard/produtos-dashboard.component';
import { ProdutoDetalheComponent } from './components/produto-card-detalhe.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { ProdutoService } from './services/produto.service';
import { ProdutoResolve } from './services/produto.resolve';

@NgModule({
declarations:[
    ProdutosDashboardComponent,
    ProdutoDetalheComponent,
    ProdutoCountComponent,
    EditarProdutoComponent,
    ProdutoAppComponent
],
imports:[
    CommonModule,
    ProdutosRoutingModule,
    
],
providers:[
    ProdutoService,
    ProdutoResolve
],
exports:[]
})

export class ProdutoModule{}