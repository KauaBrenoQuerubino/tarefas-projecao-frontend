import { Component, inject } from '@angular/core';
import {CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray} from '@angular/cdk/drag-drop';
import { NavComponent } from '../nav/nav.component';
import { TarefasComponent } from './tarefas/tarefas.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';
import { CreateTasksComponent } from '../dialog/create-tasks/create-tasks.component';


@Component({
  selector: 'app-inicio',
  imports: [NavComponent, TarefasComponent],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {
    #dialog = inject(MatDialog)

    public abrirDialog(){
      this.#dialog.open(CreateTasksComponent, {
        panelClass: 'dialog-container'
      })
    }
  
}
