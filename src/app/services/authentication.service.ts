import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    const data = { email, password };
    return this.http.post('/api/login', data);
  }

  register(usuario: string, email: string, password: string){
    const data = { usuario, email, password };
    return this.http.post('/api/register', data);
  }
}
