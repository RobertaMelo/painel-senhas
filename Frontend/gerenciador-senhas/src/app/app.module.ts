import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PainelUsuarioComponent } from './painel-usuario/painel-usuario.component';
import { PainelGerenteComponent } from './painel-gerente/painel-gerente.component';
import { PainelSenhasComponent } from './painel-senhas/painel-senhas.component';
import { RoutingModule } from './app.router';
import { FooterComponent } from './template/footer/footer.component';
import { SenhaService } from './services/senha.service';
import { CentralizadorComponent } from './centralizador/centralizador.component';

@NgModule({
  declarations: [
    AppComponent,
    PainelUsuarioComponent,
    PainelGerenteComponent,
    PainelSenhasComponent,
    FooterComponent,
    CentralizadorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [SenhaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
