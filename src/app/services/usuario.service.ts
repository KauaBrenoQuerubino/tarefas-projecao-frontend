import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {



  constructor(private http: HttpClient) {}

  private url = signal('http://localhost:8080/user')

  public httpCreateUser$(userData: Usuario) {
    return this.http.post(this.url(), userData);
  }

  public httpGetUser$(id : number | null): Observable<Usuario>{
    const endpoint = `${this.url()}/${id}`;
    return this.http.get<Usuario>((endpoint))
  }

  
  public httpDeleteUser$(id : string){
    const endpoint = `${this.url()}/${id}`;
    return this.http.delete((endpoint))
  }

}
