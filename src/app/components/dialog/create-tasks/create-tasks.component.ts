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

@Component({
  selector: 'app-create-tasks',
  imports: [FormsModule],
  templateUrl: './create-tasks.component.html',
  styleUrl: './create-tasks.component.scss'
})
export class CreateTasksComponent {

  ngOnInit(){
    this.ListarDisc()
  }


  constructor(
    private _dialogRef: MatDialogRef<CreateTasksComponent>,
    private http: HttpClient, private router: Router
  ) {}

  tarefaService = inject(TarefaService);
  discService = inject(DisciplinaService);


  discDados: Disciplina[] = []
    
  tarefaDados: Tarefa = {
    titulo: '',
    descricao: '',
    limite: '',   
    status: 'Pendente',   
    usuario: {
      matricula: Number(localStorage.getItem("matricula")),
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


  public ListarDisc() {
    this.discService.httpListDisc$().subscribe({
      next: (dados) => {
        this.discDados = dados;
      },
      error: (error) => console.log(error),
    })
  }

  public criarTarefa() {

    console.log('Dados enviados:', this.tarefaDados);

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
