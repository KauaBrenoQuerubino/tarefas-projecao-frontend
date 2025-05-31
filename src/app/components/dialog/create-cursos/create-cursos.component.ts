import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CreateTasksComponent } from '../create-tasks/create-tasks.component';
import { Curso } from '../../../models/curso.model';
import { CursoService } from '../../../services/curso.service';
import { FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-create-cursos',
  imports: [FormsModule],
  templateUrl: './create-cursos.component.html',
  styleUrl: './create-cursos.component.scss'
})
export class CreateCursosComponent {
    constructor(
      private _dialogRef: MatDialogRef<CreateCursosComponent>,
      private http: HttpClient, private router: Router, private authService: AuthService
    ) {}

  async ngOnInit() {
    
    this.cursoDados = {
      nome: "",
      duracao: "",
      usuario: {
        matricula: await this.getMatricula(),
      }
      }
    };

  cursoService = inject(CursoService);
  
  cursoDados!: Curso;

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

  async getMatricula(): Promise<number | null> {
      const matricula = await firstValueFrom(this.authService.getMatricula$());
    
      if (matricula === null) {
        this.router.navigate(['/login']);
      }
    
      return matricula;
    }


  public closeDialog(){
    return this._dialogRef.close()
  }
}

