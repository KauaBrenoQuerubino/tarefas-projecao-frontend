import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarefa } from '../models/tarefa.model';
import { Disciplina } from '../models/disciplina.model';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {

  constructor(private http: HttpClient) {}

  private url = signal('http://localhost:8080/disciplina')

  public httpListDisc$(matricula : number | null): Observable<Array<Disciplina>>{
    return this.http.get<Disciplina[]>(`${this.url()}/${matricula}`)
  }

  public httpCreateDisc$(DisciplinaData: Disciplina): Observable<Disciplina>{
    return this.http.post<Disciplina>(this.url(), DisciplinaData);
  }

  public httpDeleteDisc$(id : string){
    const endpoint = `${this.url()}/${id}`;
    return this.http.delete((endpoint))
  }
}
