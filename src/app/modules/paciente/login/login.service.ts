import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  URL = 'paciente/producao/logar.php';

  constructor(private http: HttpClient) { }

  postUser(body: any): Observable<any> {
    return this.http.post<any>(environment.api + this.URL, body)
  }
}
