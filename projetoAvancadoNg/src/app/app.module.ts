import { NavegacaoModule } from './navegacao/navegacao.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';

// import { APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { registerLocaleData } from "@angular/common";
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import { NgBrazil } from 'ng-brazil';
import { CustomFormsModule } from 'ng2-validation'
import { TextMaskModule } from 'angular2-text-mask';

import { AppComponent } from './app.component';
import { SobreComponent } from './institucional/sobre/sobre.component';

import { CadastroComponent } from './demos/reactiveforms/cadastro/cadastro.component';
import { AppRoutingModule } from './app.routes';
import { AuthGuard } from './services/app.guard';
import { CadastroGuard } from './services/cadastro.guard';
import { FilmesComponent } from './demos/pipes/filmes/filmes.component';
import { FileSizePipe } from './demos/pipes/filmes/filesize.pipe';
import { ImageFormaterPipe } from './demos/pipes/filmes/image.pipe';
import { BarModule } from './demos/bar-di-zones/bar.module';
import { BarServices } from './demos/bar-di-zones/bar.service';
import { HttpClientModule } from '@angular/common/http';
import { TodoModule } from './demos/todo-list/todo.module';

export const BAR_PROVIDERS: Provider[] = [
  BarServices // pode colocar outros, fazer uma coleção de providers
];


@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    CadastroComponent,
    FilmesComponent,
    FileSizePipe,
    ImageFormaterPipe

  ],
  imports: [
    NavegacaoModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule,
    NgBrazil,
    CustomFormsModule,
    AppRoutingModule,
    BarModule.forRoot({
      unidadeId: 1000,
      unidadeToken: 'eca983c99a0e8ff8911928dc'
    }),
    TodoModule
    ,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    CadastroGuard,
    // BAR_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
