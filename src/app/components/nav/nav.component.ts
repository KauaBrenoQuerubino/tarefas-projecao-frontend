import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { CreateTasksComponent } from '../dialog/create-tasks/create-tasks.component';
import { CreateCursosComponent } from '../dialog/create-cursos/create-cursos.component';
import { CreateMateriasComponent } from '../dialog/create-materias/create-materias.component';
import { RouterModule } from '@angular/router';
import { timeInterval } from 'rxjs';



@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  isCollapsed = false;

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed 
  }
   sidebarVisible: boolean = true;

   #dialog = inject(MatDialog)

    public abrirDialogTarefas(){
      this.#dialog.open(CreateTasksComponent, {
        panelClass: 'dialog-container'
      })
    }

    public abrirDialoMateria(){
      this.#dialog.open(CreateMateriasComponent, {
        panelClass: 'dialog-container-'
      })
    }

    public abrirDialoCurso(){
      this.#dialog.open(CreateCursosComponent, {
        panelClass: 'dialog-container--'
      })
    }
}
