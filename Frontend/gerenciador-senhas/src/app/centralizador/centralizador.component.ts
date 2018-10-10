import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-centralizador',
  templateUrl: './centralizador.component.html',
  styleUrls: ['./centralizador.component.css']
})
export class CentralizadorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navegaPainelSenhas = () => {
    this.router.navigateByUrl('/senhas');
  }

  navegaPainelUsuario = () => {
    this.router.navigateByUrl('/usuario');
  }

  navegaPainelGerente = () => {
    this.router.navigateByUrl('/gerente');
  }
 
}
