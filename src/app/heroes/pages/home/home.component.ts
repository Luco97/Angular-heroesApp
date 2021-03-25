import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { Usuario } from '../../../auth/interfaces/usuario.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  get Usuario() {
    return this.authService.Usuario;
  }
  constructor(private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
 }

 logout() {
  this.router.navigate(['./auth'])
 }

}
