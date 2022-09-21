import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../state/pokemon/pokemon';

@Injectable({
    providedIn: 'root'
})
export class PokemonService{
    private baseUrl = 'http://localhost:8080/api/pokemon'

    constructor(private http: HttpClient){

    }

    getPokemonById(id: number): Observable<any>{
        return this.http.get(`${this.baseUrl}/${id}`)
    }

    createPokemon(pokemon:object): Observable<Object>{
        return this.http.post(`${this.baseUrl}`,pokemon)
    }

    updatePokemon(id:number|string, value:any): Observable<Object>{
        return this.http.put(`${this.baseUrl}/${id}`, value)
    }

    deletePokemon(id:number): Observable<any>{
        return this.http.delete(`${this.baseUrl}/${id}`,{responseType:"text"})
    }

    getPokemonList(): Observable<any>{
        return this.http.get(`${this.baseUrl}`)
    }
}