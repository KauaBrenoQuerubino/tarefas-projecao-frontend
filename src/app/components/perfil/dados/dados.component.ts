import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../../models/usuario.model';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-dados',
  imports: [],
  templateUrl: './dados.component.html',
  styleUrl: './dados.component.scss'
})
export class DadosComponent {
  
  ngOnInit(){
    this.procurarUsuario()
  }
 
 
  constructor(private http: HttpClient, private router: Router) {}

  usuarioService = inject(UsuarioService);
    
  usuarioDados: Usuario = {
    matricula: 0,
    nome: '',
    senha: '*******'
  };

  public procurarUsuario() {
    this.usuarioService.httpGetUser$(Number(localStorage.getItem("matricula"))).subscribe({
      next: (res: Usuario) => {
            this.usuarioDados.matricula = res.matricula
            this.usuarioDados.nome = res.nome
        },
    error: err => {
        console.error('Erro ao buscar usuário:', err);
        window.alert('Usuário não encontrado');
      }
    });
    
  }
}
