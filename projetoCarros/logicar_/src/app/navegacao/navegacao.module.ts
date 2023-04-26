import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatListModule } from '@angular/material/list';
// import { MatButtonModule } from '@angular/material/button';
// import { MatToolbarModule } from '@angular/material/toolbar';
import { MenubarModule } from 'primeng/menubar';
import { AppComponent } from '../app.component';


@NgModule({
    declarations:[
      MenuComponent,
      NotFoundComponent,
      HomeComponent,
      FooterComponent,
      SidebarComponent
    ],
    imports:[
      CommonModule,
      RouterModule,
      BrowserModule,
      BrowserAnimationsModule,
      MenubarModule

    ],
    exports:[
      MenuComponent,
      NotFoundComponent,
      HomeComponent,
      FooterComponent
    ]
})

export class NavegacaoModule { }
