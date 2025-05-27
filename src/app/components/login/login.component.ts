import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/usuario.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [RouterModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
    constructor(private http: HttpClient, private router: Router) {}

    usuarioService = inject(UsuarioService);
    
    usuarioDados: Usuario = {
      matricula: 0,
      nome: '',
      senha: ''
    };

    dados = ""

    

    public procurarUsuario() {
      this.usuarioService.httpGetUser$(this.usuarioDados.matricula).subscribe({
        next: (res: Usuario) => {
            if (res.senha === this.usuarioDados.senha) {
              localStorage.setItem("matricula", res.matricula.toString());
              this.router.navigate(['']); 
            } else {
              window.alert('Senha incorreta');
            }
          },
      error: err => {
          console.error('Erro ao buscar usuário:', err);
          window.alert('Usuário não encontrado');
        }
      });
    
    }

}
