import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroe } from '../interfaces/heroe.interfaces';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private apiUrl: string = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Heroe[]> {
    const url: string = `${this.apiUrl}/heroes`;

    return this.http.get<Heroe[]>(url);
  }
}
