import { AdministracaoModule } from './administracao/administracao.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacaoModule } from './navegacao/navegacao.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavContainer, MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavegacaoModule,
    BrowserAnimationsModule,
    AdministracaoModule,
    MatSidenavModule
  ],
  providers: [
    MatSidenavContainer
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
