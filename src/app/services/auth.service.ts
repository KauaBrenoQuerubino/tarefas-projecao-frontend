import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private matriculaSubject = new BehaviorSubject<number | null>(null);

  setMatricula(valor: number) {
    this.matriculaSubject.next(valor);
  }

  getMatricula$(): Observable<number | null> {
    return this.matriculaSubject.asObservable();
  }
}
