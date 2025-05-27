import { Component, inject, OnInit } from '@angular/core';
import { TarefaService } from '../../../services/tarefa.service';
import { CdkDrag, CdkDropList, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Tarefa } from '../../../models/tarefa.model';

@Component({
  selector: 'app-tarefas',
  standalone: true,
  imports: [CommonModule, CdkDropList, CdkDrag, HttpClientModule],
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.scss']
})
export class TarefasComponent {

  tarefas: Tarefa[] = [];

  constructor(private http: HttpClient) {}

  private tarefaService = inject(TarefaService)

  ngOnInit(): void {
    this.tarefaService.httpListTask$(Number(localStorage.getItem("matricula"))).subscribe({
      next: (dados) => {
        this.tarefas = dados;
      }
      ,
      error: (error) => console.log(error),
    })
  }

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



  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tarefas, event.previousIndex, event.currentIndex);
  }

}
