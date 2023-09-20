import { AuthenticationService } from 'src/app/services/authentication.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  usuario: string = '';
  email: string = '';
  password: string = '';

  constructor(private authService: AuthenticationService){}

    onSubmit(){
      this.authService.register(this.usuario, this.email, this.password)
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
