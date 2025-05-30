import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/usuario.service';
import { FormsModule } from '@angular/forms';
import { Tarefa } from '../../models/tarefa.model';
import { tokenDTO} from '../../models/token.model';
import { TokenService } from '../../services/token.service';
import { authtoken } from '../../models/authtoken.model';

@Component({
  selector: 'app-login',
  imports: [RouterModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
    constructor(private http: HttpClient, private router: Router) {}

    tokenService = inject(TokenService);
    
    tokenDados: tokenDTO = {
      matricula: 0,
      senha: ''
    };

    public gerarToken() {
      this.tokenService.httpGerarToken$(this.tokenDados).subscribe({
        next: (res : authtoken) => {
            localStorage.setItem("auth", res.token)
            this.router.navigate(['']);
        },
        error: err => {
          console.error('Erro ao buscar usuário:', err);
          window.alert('Verifique suas credenciais');
        }
      });
    
    }

}
