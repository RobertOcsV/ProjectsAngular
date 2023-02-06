import { ActivatedRoute } from '@angular/router';
import { ProdutoDetalheComponent } from './../components/produto-card-detalhe.component';
import { ProdutoCountComponent } from './../components/produto-count.component';
import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { Produto } from '../models/produto';

@Component({
  selector: 'app-produtos-dashboard',
  templateUrl: './produtos-dashboard.component.html',
  styles: []
})
export class ProdutosDashboardComponent implements OnInit, AfterViewInit {

  produtos: Produto[]

@ViewChild(ProdutoCountComponent, {static: false}) contador: ProdutoCountComponent;  
@ViewChild('teste', {static: false}) mensagemTela: ElementRef;

@ViewChildren(ProdutoDetalheComponent) botoes: QueryList<ProdutoDetalheComponent>;
  constructor(private route: ActivatedRoute) { }
  

  ngOnInit() {
    this.produtos = this.route.snapshot.data['produtos'];
    console.log(this.route.snapshot.data['teste']);
  }


  ngAfterViewInit(): void {
    console.log('Objeto do Contador:', this.contador.produtos);

    let clickTexto: Observable<any> = fromEvent(this.mensagemTela.nativeElement, 'click');
    clickTexto.subscribe(()=>{
      alert('clicou no texto!');
      return;
    })
    console.log(this.botoes);
    this.botoes.forEach(p =>{
      console.log(p.produto)
    });
  }

  mudarStatus(event: Produto){
    event.ativo = !event.ativo;
  }

}
