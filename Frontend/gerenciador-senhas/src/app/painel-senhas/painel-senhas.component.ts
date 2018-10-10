import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { SenhaService } from '../services/senha.service';


@Component({
  selector: 'app-painel-senhas',
  templateUrl: './painel-senhas.component.html',
  styleUrls: ['./painel-senhas.component.css']
})
export class PainelSenhasComponent implements OnInit {

  senhaAnterior;
  senhaAtual;
  senhaProxima;

  constructor(public senhaService: SenhaService) { }

  ngOnInit() {
    this.atualizaTela();
    interval(1000).subscribe(() => this.atualizaTela());
  }

  atualizaTela() {
    this.senhaService.senhaAnterior().subscribe(senha => {
      this.senhaAnterior = this.senhaService.getNomeSenha(senha);
    });
    this.senhaService.senhaAtual().subscribe(senha => {
      let novaSenha = this.senhaService.getNomeSenha(senha);
      if (this.senhaAtual != novaSenha) {
        this.senhaService.animaSenhaAtual();
      }
      this.senhaAtual = novaSenha;
    });
    this.senhaService.senhaProxima().subscribe(senha => {
      this.senhaProxima = this.senhaService.getNomeSenha(senha);
    });
  }

}
