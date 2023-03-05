import { Nav } from './models/dinamicnav';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  navs: Nav[] = [];
  item: any;


  ngOnInit(): void {
    this.navs =  [
      {
        link: '/home',
        name: 'Home',
        exact: true,
        admin: false
      },
      {
        link: '/home',
        name: 'Home',
        exact: true,
        admin: false
      },

    ]
  }






}
