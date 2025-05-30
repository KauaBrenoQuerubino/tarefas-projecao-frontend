import { HttpClient } from '@angular/common/http';
import { Component, inject, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Usuario } from '../../../models/usuario.model';
import { UsuarioService } from '../../../services/usuario.service';
import { Tarefa } from '../../../models/tarefa.model';
import { TarefaService } from '../../../services/tarefa.service';
import { FormsModule } from '@angular/forms';
import { DisciplinaService } from '../../../services/disciplina.service';
import { Disciplina } from '../../../models/disciplina.model';
import { firstValueFrom } from 'rxjs';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-create-tasks',
  imports: [FormsModule],
  templateUrl: './create-tasks.component.html',
  styleUrl: './create-tasks.component.scss'
})
export class CreateTasksComponent {

async ngOnInit(){
    this.ListarDisc()
    const matricula = await this.getMatricula();

    if (!matricula) return;

    this.tarefaDados = {
      titulo: '',
      descricao: '',
      limite: '',
      status: 'Pendente',
      usuario: {
        matricula: matricula,
        nome: null,
        senha: null,
        curso: null
      },
      disciplina: {
        id: '0',
        nome: null,
        curso: null
      }
    };
  }


  constructor(
    private _dialogRef: MatDialogRef<CreateTasksComponent>,
    private router: Router, private authService: AuthService
  ) {}

  tarefaService = inject(TarefaService);
  discService = inject(DisciplinaService);


  discDados: Disciplina[] = []

 async getMatricula(): Promise<number | null> {
  const matricula = await firstValueFrom(this.authService.getMatricula$());

  if (matricula === null) {
    this.router.navigate(['/login']);
  }

  return matricula;
}
    
tarefaDados!: Tarefa;

  public ListarDisc() {
    this.discService.httpListDisc$(this.tarefaDados.usuario.matricula).subscribe({
      next: (dados) => {
        this.discDados = dados;
      },
      error: (error) => console.log(error),
    })
  }

  public criarTarefa() {

    this.tarefaService.httpCreateTask$(this.tarefaDados).subscribe({
      next: (res: Tarefa) => {
          window.location.reload();
      },
    error: err => {
        console.error('Erro ao criar tarefa:', err);
        window.alert('Erro ao criar tarefa');
      }
    });
  }

  public closeDialog(){
    return this._dialogRef.close()
  }
}
