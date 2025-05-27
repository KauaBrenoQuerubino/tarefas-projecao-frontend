import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { NavComponent } from './components/nav/nav.component';

export const routes: Routes = [
    {
        path: "",
        component: InicioComponent 
    },
    {
        path: "cadastro",
        component: CadastroComponent
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "perfil",
        component: PerfilComponent
    },
    {
        path: "nav",
        component: NavComponent
    }
    
];
