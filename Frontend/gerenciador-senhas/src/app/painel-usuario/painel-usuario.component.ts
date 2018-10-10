import { Component, OnInit } from '@angular/core';
import { SenhaService } from '../services/senha.service';

@Component({
  selector: 'app-painel-usuario',
  templateUrl: './painel-usuario.component.html',
  styleUrls: ['./painel-usuario.component.css']
})
export class PainelUsuarioComponent implements OnInit {
  
  senhaGerada;
  
  constructor(
    public senhaService: SenhaService
  ) { }

  ngOnInit() {
  }

  geraSenhaNormal() {
    this.senhaService.geraSenhaNormal().subscribe(senha => {
      this.senhaGerada = this.senhaService.getNomeSenha(senha);
    });
    
  }

  geraSenhaPreferencial() {
    this.senhaService.geraSenhaPreferencial().subscribe(senha => {
      this.senhaGerada = this.senhaService.getNomeSenha(senha);
    });
  }

}
