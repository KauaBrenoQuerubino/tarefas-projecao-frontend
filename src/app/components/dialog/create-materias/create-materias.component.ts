import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CreateTasksComponent } from '../create-tasks/create-tasks.component';
import { Disciplina } from '../../../models/disciplina.model';
import { DisciplinaService } from '../../../services/disciplina.service';
import { Curso } from '../../../models/curso.model';
import { FormsModule } from '@angular/forms';
import { CursoService } from '../../../services/curso.service';

@Component({
  selector: 'app-create-materias',
  imports: [FormsModule],
  templateUrl: './create-materias.component.html',
  styleUrl: './create-materias.component.scss'
})
export class CreateMateriasComponent {
  constructor(
    private _dialogRef: MatDialogRef<CreateMateriasComponent>,
    private http: HttpClient, private router: Router
  ) {}

  ngOnInit() {
    this.ListarDisc()
  }


  discService = inject(DisciplinaService);
  cursoService = inject(CursoService);
  

  cursoArray: Curso[] = []

  discDados: Disciplina = {
    nome: "",
    Curso: {
      nome: "",
      duracao: ""
    }
  };

  public criarDisciplina() {
    console.log(this.discDados)
    this.discService.httpCreateDisc$(this.discDados).subscribe({
      next: (res: Disciplina) => {
          window.location.reload();
      },
    error: err => {
        console.error('Erro ao criar tarefa:', err);
        window.alert('Erro ao criar tarefa');
      }
    });
  }


  public ListarDisc() {
    this.cursoService.httpListCurso$().subscribe({
      next: (dados) => {
        this.cursoArray = dados;
      },
      error: (error) => console.log(error),
    })
  }

  public closeDialog(){
    return this._dialogRef.close()
  }
}
