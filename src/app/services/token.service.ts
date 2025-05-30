import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { tokenDTO} from '../models/token.model';
import { Observable } from 'rxjs';
import { authtoken } from '../models/authtoken.model';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private http: HttpClient) {}

  private Loginurl = signal('http://localhost:8080/login')
  private Sessaourl = signal('http://localhost:8080/sessao')

    public httpGerarToken$(tokenData: tokenDTO): Observable<authtoken>{
        return this.http.post<authtoken>(this.Loginurl(), tokenData);
    }

    public httpValidarToken$(tokenData: authtoken): Observable<tokenDTO>{
        return this.http.post<tokenDTO>(this.Sessaourl(), tokenData);
    }




}
