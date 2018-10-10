import { Component, OnInit } from '@angular/core';
import { SenhaService } from '../services/senha.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-painel-gerente',
  templateUrl: './painel-gerente.component.html',
  styleUrls: ['./painel-gerente.component.css']
})
export class PainelGerenteComponent implements OnInit {
 
  constructor(
    public senhaService: SenhaService,
    private router: Router
  ) { }

  ngOnInit() {}

  chamaProximaSenha() {
    this.senhaService.chamaProximaSenha().subscribe();
  }

  chamaSenhaAtual() {
    this.senhaService.animaSenhaAtual();
  }

  zeraSenhas() {
    this.senhaService.zeraSenhas().subscribe();
  }

  
  navegaPainelCentralizador = () => {
    this.router.navigateByUrl('/centralizador');
  }

}

