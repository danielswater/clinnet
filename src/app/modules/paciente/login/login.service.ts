import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  URL = 'https://www.clinnet.com.br/clinnet02/paciente/producao/logar.php';

  constructor(private http: HttpClient) { }

  postUser(body: any): Observable<any> {
    return this.http.post<any>(this.URL, body)
  }
}
