import { LoginService } from './login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
              private snackbar: MatSnackBar,
              private loginService: LoginService) { }

  ngOnInit(): void {
  }

  navigateToUsuarioCreate(): void {
    this.router.navigate(['/usuarios/create'])
  }

  logar(): void {
    this.router.navigate(['/'])
    this.loginService.showMessage('Login efetuado com sucesso!')
  }

}
