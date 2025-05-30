import { Component, inject, OnInit } from '@angular/core';
import { TarefaService } from '../../../services/tarefa.service';
import { CdkDrag, CdkDropList, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Tarefa } from '../../../models/tarefa.model';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-tarefas',
  standalone: true,
  imports: [CommonModule, CdkDropList, CdkDrag, HttpClientModule],
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.scss']
})
export class TarefasComponent {

  tarefas: Tarefa[] = [];

  constructor(private http: HttpClient, private authService: AuthService, private router: Router) {}

  private tarefaService = inject(TarefaService)


  async ngOnInit() {

    this.authService.getMatricula$().subscribe((matricula) => {
      if (matricula !== null) {
        this.tarefaService.httpListTask$(matricula).subscribe({
          next: (dados) => {
            this.tarefas = dados;
          },
          error: (error) => console.log(error),
        })
      }
    }
  )
}

  tarefaDados!: Tarefa;

  apagarTarefa(id : string | undefined) {
      console.log(id)
      this.tarefaService.httpDeleteTask$(id).subscribe({
         next: () => {
          window.location.reload();
          
        },
        error: (err) => {
          window.location.reload();
        
      }
      })
  }

   async getMatricula(): Promise<number | null> {
    const matricula = await firstValueFrom(this.authService.getMatricula$());
  
    if (matricula === null) {
      this.router.navigate(['/login']);
    }
  
    return matricula;
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tarefas, event.previousIndex, event.currentIndex);
  }

}
