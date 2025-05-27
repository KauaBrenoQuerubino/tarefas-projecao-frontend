import { Component, inject} from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../../models/usuario.model';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  imports: [RouterModule, FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {
    constructor(private http: HttpClient, private router: Router) {}

    #usuarioService = inject(UsuarioService);
    
    usuarioDados: Usuario = {
      matricula: 0,
      nome: '',
      senha: ''
    };

    confirmarSenha: string = '';


    public criarUsuario() {
      if (this.usuarioDados.matricula == 0 || this.usuarioDados.nome == "" || this.usuarioDados.senha == "") {
          window.alert('Os dados precisam ser preenchidos corretamente')  
          return;
      }

      if (this.usuarioDados.senha !== this.confirmarSenha) {
            window.alert('As senhas não coincidem');
            return;
      }

      this.#usuarioService.httpCreateUser$(this.usuarioDados).subscribe({
        next: res => this.router.navigate(['/login']),
        error: err => console.error('Erro ao criar usuario', err)
      })

    }


}
