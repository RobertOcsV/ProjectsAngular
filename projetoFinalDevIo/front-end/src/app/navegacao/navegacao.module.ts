import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
    declarations:[
      MenuComponent,
      NotFoundComponent,
      HomeComponent,
      FooterComponent
    ],
    imports:[
      CommonModule,
      RouterModule,
      NgbModule
    ],
    exports:[
      MenuComponent,
      NotFoundComponent,
      HomeComponent,
      FooterComponent
    ]
})

export class NavegacaoModule { }
