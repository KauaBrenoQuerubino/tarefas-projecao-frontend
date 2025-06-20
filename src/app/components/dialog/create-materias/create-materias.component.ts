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
import { AuthService } from '../../../services/auth.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-create-materias',
  imports: [FormsModule],
  templateUrl: './create-materias.component.html',
  styleUrl: './create-materias.component.scss'
})
export class CreateMateriasComponent {
  constructor(
    private _dialogRef: MatDialogRef<CreateMateriasComponent>,
    private http: HttpClient, private router: Router, private authService: AuthService
  ) {}

  async ngOnInit() {
    
    this.discDados = {
      nome: "",
      curso: {
        nome: "",
        duracao: "",
        usuario: {
          matricula: await this.getMatricula(),
        }
      }
    };

    this.ListarCurso()
  }


  discService = inject(DisciplinaService);
  cursoService = inject(CursoService);
  

  cursoArray: Curso[] = []
  discDados!: Disciplina;
  


  public async criarDisciplina() {

    if (this.discDados.curso) {
    this.discDados.curso.usuario = {
      matricula: await this.getMatricula()
    };
  }
   
    console.log(this.discDados)
    this.discService.httpCreateDisc$(this.discDados).subscribe({
      next: (res) => {
        window.location.reload();
      },
    error: err => {
        console.error('Erro ao criar disciplina:', err);
        window.alert('Erro ao criar disciplina');
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


  public ListarCurso() {
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
