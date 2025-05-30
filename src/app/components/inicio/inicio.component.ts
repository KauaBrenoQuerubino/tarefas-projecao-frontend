import { Component, inject } from '@angular/core';
import {CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray} from '@angular/cdk/drag-drop';
import { NavComponent } from '../nav/nav.component';
import { TarefasComponent } from './tarefas/tarefas.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';
import { CreateTasksComponent } from '../dialog/create-tasks/create-tasks.component';
import { Router, RouterModule } from '@angular/router';
import { TokenService } from '../../services/token.service';
import { authtoken } from '../../models/authtoken.model';
import { tokenDTO } from '../../models/token.model';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-inicio',
  imports: [NavComponent, TarefasComponent, RouterModule],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {

    constructor(private router: Router, private http: HttpClient, private authService: AuthService) {}
    
    ngOnInit() {
      this.authToken()
    }
    
    #dialog = inject(MatDialog)
    
    tokenService = inject(TokenService);
    
    public abrirDialog(){
    this.#dialog.open(CreateTasksComponent, {
        panelClass: 'dialog-container'
      })
    }

    auth: authtoken = {
      token: localStorage.getItem("auth") ?? ""
    }

    public authToken() {
      this.tokenService.httpValidarToken$(this.auth).subscribe({
        next: (res : tokenDTO) => {
          this.authService.setMatricula(res.matricula);
         
        },
        error: err => {
          this.router.navigate(['/login']);
        }
      });
    }
  
}
