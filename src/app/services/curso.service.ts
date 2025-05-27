import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarefa } from '../models/tarefa.model';
import { Curso } from '../models/curso.model';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(private http: HttpClient) {}

  private url = signal('http://localhost:8080/curso')

  public httpListCurso$(): Observable<Array<Curso>>{
    return this.http.get<Curso[]>(this.url())
  }

  public httpCreateCurso$(CursoData: Curso): Observable<Curso>{
    return this.http.post<Curso>(this.url(), CursoData);
  }

  public httpDeleteCurso$(id : string | undefined){
    const endpoint = `${this.url()}/${id}`;
    return this.http.delete((endpoint))
  }
}
