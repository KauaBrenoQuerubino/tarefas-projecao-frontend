import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CreateTasksComponent } from '../create-tasks/create-tasks.component';
import { Curso } from '../../../models/curso.model';
import { CursoService } from '../../../services/curso.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-cursos',
  imports: [FormsModule],
  templateUrl: './create-cursos.component.html',
  styleUrl: './create-cursos.component.scss'
})
export class CreateCursosComponent {
    constructor(
    private _dialogRef: MatDialogRef<CreateCursosComponent>,
    private http: HttpClient, private router: Router
  ) {}

  

  cursoService = inject(CursoService);
  
  cursoDados: Curso = {
    nome: "",
    duracao: ""
  }

  public criarCurso() {
    this.cursoService.httpCreateCurso$(this.cursoDados).subscribe({
      next: (res: Curso) => {
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
