import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { Usuario } from '../interfaces/usuario.interface';
import { tap, map } from "rxjs/operators";

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

  verificaAutenticacion(): Observable<boolean>{
    if(!localStorage.getItem('token')) {
      return of(false);
    }
    

    return this.http.get<Usuario>(`${this.apiUrl}/usuarios/1`)
                .pipe(
                  map( auth =>{
                    //console.log(auth);
                    this._user = auth; //Para tener e lvalor del nombrey asi mostrarlo en e menu
                    return true; //Significa quesi esta autenticado
                  })
                )
  }

  login(): Observable<Usuario> {
    const url = `${this.apiUrl}/usuarios/1`;

    return this.http.get<Usuario>(url)
                .pipe(
                  tap( resp => {
                    //console.log(resp)
                    this._user = resp;
                  }),
                  tap( resp => {
                    //console.log(resp)
                    localStorage.setItem('token',resp.id.toString());
                  })
                  
                );
  }
}
