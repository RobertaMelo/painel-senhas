import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../config/api.config';
import { Observable } from 'rxjs';
import { SenhaDTO } from '../model/senha.dto';
import * as $ from 'jquery';

@Injectable()
export class SenhaService {

  constructor(
    public http: HttpClient
  ) {
    this.iniciaAnimatedCss();
  }

  geraSenhaNormal() : Observable<SenhaDTO> {
    return this.http.get<SenhaDTO>(`${API_CONFIG.baseUrl}/gera-nova-senha-normal`);
  }

  geraSenhaPreferencial() : Observable<SenhaDTO> {
    return this.http.get<SenhaDTO>(`${API_CONFIG.baseUrl}/gera-nova-senha-preferencial`);
  }

  senhaAnterior() : Observable<SenhaDTO> {
    return this.http.get<SenhaDTO>(`${API_CONFIG.baseUrl}/senha-anterior`);
  }

  senhaAtual() : Observable<SenhaDTO> {
    return this.http.get<SenhaDTO>(`${API_CONFIG.baseUrl}/senha-atual`);
  }

  senhaProxima() : Observable<SenhaDTO> {
    return this.http.get<SenhaDTO>(`${API_CONFIG.baseUrl}/proxima-senha`);
  }

  chamaProximaSenha() : Observable<SenhaDTO> {
    return this.http.get<SenhaDTO>(`${API_CONFIG.baseUrl}/chama-proxima-senha`);
  }

  zeraSenhas() : Observable<SenhaDTO> {
    return this.http.get<SenhaDTO>(`${API_CONFIG.baseUrl}/zerar-senhas`);
  }

  getNomeSenha(senha: SenhaDTO) : string {
    if (senha == null) {
      return "-";
    }
    return senha.tipo.substring(0, 1) + senha.id;
  }

  animaSenhaAtual() {
    $('#senhaAtual').animateCss('animated flash');
  }

  private iniciaAnimatedCss() {
    $.fn.extend({
      animateCss: function(animationName, callback) {
        var animationEnd = (function(el) {
          var animations = {
            animation: 'animationend',
            OAnimation: 'oAnimationEnd',
            MozAnimation: 'mozAnimationEnd',
            WebkitAnimation: 'webkitAnimationEnd',
          };
    
          for (var t in animations) {
            if (el.style[t] !== undefined) {
              return animations[t];
            }
          }
        })(document.createElement('div'));
    
        this.addClass('animated ' + animationName).one(animationEnd, function() {
          $(this).removeClass('animated ' + animationName);
    
          if (typeof callback === 'function') callback();
        });
    
        return this;
      },
    });
  }

}
