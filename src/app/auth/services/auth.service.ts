import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario.interface';
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl: string = environment.baseUrl;
  private _user!: Usuario;

  get Usuario(): Usuario {
    return {...this._user};
  }

  constructor(private http: HttpClient) { }

  login(): Observable<Usuario> {
    const url = `${this.apiUrl}/usuarios/1`;

    return this.http.get<Usuario>(url)
                .pipe(
                  tap( resp => {
                    //console.log(resp)
                    this._user = resp;
                  })
                );
  }
}
