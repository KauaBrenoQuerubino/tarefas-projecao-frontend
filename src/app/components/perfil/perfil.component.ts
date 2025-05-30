import { Component, inject  } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { NavComponent } from '../nav/nav.component';
import { CreateTasksComponent } from '../dialog/create-tasks/create-tasks.component';
import { DadosComponent } from './dados/dados.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/usuario.service';
import { tokenDTO } from '../../models/token.model';
import { AuthService } from '../../services/auth.service';
import { TokenService } from '../../services/token.service';
import { authtoken } from '../../models/authtoken.model';

@Component({
  selector: 'app-perfil',
  imports: [NavComponent,  DadosComponent],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss'
})
export class PerfilComponent {
    constructor(private router: Router, private http: HttpClient, private authService: AuthService) {}
       
    ngOnInit() {
     this.auth()
    }
       
    tokenService = inject(TokenService);

    public auth() {
     this.authService.getMatricula$().subscribe((matricula) => {
      if (matricula === null) {
        this.router.navigate(['/login']);
          }
        }
      )
    }
    
}
