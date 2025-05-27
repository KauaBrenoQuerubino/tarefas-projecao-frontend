import { Component, inject  } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { NavComponent } from '../nav/nav.component';
import { CreateTasksComponent } from '../dialog/create-tasks/create-tasks.component';
import { DadosComponent } from './dados/dados.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-perfil',
  imports: [NavComponent,  DadosComponent],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss'
})
export class PerfilComponent {
    
  
  
    #dialog = inject(MatDialog)

    public abrirDialog(){
      this.#dialog.open(CreateTasksComponent, {
        panelClass: 'dialog-container'
      })
    }


    
}
