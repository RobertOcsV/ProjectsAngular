import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {

  
nav: Nav[] = [

  {
    link: '/home',
    name: 'Home',
    exact: true,
    admin: false
  },
  {
    link: '/cadastro',
    name: 'Cadastro',
    exact: true,
    admin: false
  },
  {
    link: '/sobre',
    name: 'Sobre',
    exact: true,
    admin: false
  },
  {
    link: '/filmes',
    name: 'Filmes',
    exact: false,
    admin: false
  },
  {
    link: '/produtos',
    name: 'Produtos',
    exact: true,
    admin: false
  },
  {
    link: '/admin',
    name: 'Admin',
    exact: true,
    admin: false
  },
];


}



//não recomendável, normalmente criaremos uma interfacec em outro arquivo, esta interface 
//será apenas de exemplo para criação de links dinâmicos
interface Nav{
  link: string,
  name: string,
  exact: boolean,
  admin: boolean
}