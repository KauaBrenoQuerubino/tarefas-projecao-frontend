import { Injectable, signal } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarefa } from '../models/tarefa.model';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor(private http: HttpClient) {}

  private url = signal('http://localhost:8080/task')

  public httpListTask$(matricula : number): Observable<Array<Tarefa>>{
    return this.http.get<Tarefa[]>((`${this.url()}/usuarios/${matricula}`))
  }

  public httpCreateTask$(tarefaData: Tarefa): Observable<Tarefa>{
      return this.http.post<Tarefa>(this.url(), tarefaData);
    }

  public httpDeleteTask$(id : string | undefined){
    const endpoint = `${this.url()}/${id}`;
    return this.http.delete((endpoint))
  }

}
