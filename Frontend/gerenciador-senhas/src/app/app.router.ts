import { Routes, RouterModule } from '@angular/router'
import { PainelUsuarioComponent } from './painel-usuario/painel-usuario.component';
import { PainelGerenteComponent } from './painel-gerente/painel-gerente.component';
import { PainelSenhasComponent } from './painel-senhas/painel-senhas.component';
import { CentralizadorComponent } from './centralizador/centralizador.component';

const routes: Routes = [
    {
        path: '',
        component: CentralizadorComponent
    },
    {
        path: 'senhas',
        component: PainelSenhasComponent
    },
    {
        path: 'gerente',
        component: PainelGerenteComponent
    },  
    {
        path: 'usuario',
        component: PainelUsuarioComponent
    },
    {
        path: 'centralizador',
        component: CentralizadorComponent
    },
    { 
    path: '**', 
    redirectTo: ''
  } 
];
export const RoutingModule = RouterModule.forRoot(routes, {useHash: true});