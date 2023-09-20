import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthenticationService) {}

  onSubmit() {
    this.authService.login(this.email, this.password)
      .subscribe(
        (response) => {
          // Autenticação bem-sucedida, redirecione ou realize ações necessárias
        },
        (error) => {
          // Trate erros de autenticação
        }
      );
  }
}
