import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroe } from '../interfaces/heroe.interfaces';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private apiUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Heroe[]> {
    const url: string = `${this.apiUrl}/heroes`;

    return this.http.get<Heroe[]>(url);
  }
  getHeroe(id: string): Observable<Heroe>{
    const url: string = `${this.apiUrl}/heroes/${id}`;

    return this.http.get<Heroe>(url);
  }
  getSugerencias(termino: string): Observable<Heroe[]>{
    const url: string = `${this.apiUrl}/heroes?q=${termino}&_limit=6`;
    
    return this.http.get<Heroe[]>(url);
  }
  postHeroe(heroe: Heroe): Observable<Heroe>{ //Agrega nuevo heroe

    const url: string = `${this.apiUrl}/heroes`;

    return this.http.post<Heroe>(url, heroe);
  }
  putHeroe(heroe: Heroe): Observable<Heroe>{ //Actualiza heroe

    const url: string = `${this.apiUrl}/heroes/${heroe.id}`;

    return this.http.put<Heroe>(url, heroe);
  }

}
