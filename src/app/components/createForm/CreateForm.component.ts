import { Component, OnInit } from '@angular/core';
import { Observable, retry, throwError } from 'rxjs'
import { map, catchError } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http'
import { Pokemon } from 'src/app/state/pokemon/pokemon';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/service/PokemonService';

@Component({
  selector: 'create',
  templateUrl: './CreateForm.component.html',
  styleUrls: ['./CreateForm.component.css']
})
export class CreateFormComponent implements OnInit{
  pokemon:Pokemon = new Pokemon()
  isSubmitted = false
  
  constructor(private pokemonService: PokemonService, private router:Router){}
  
  ngOnInit(): void {
      
  }

  newPokemon(): void{
    this.isSubmitted = false,
    this.pokemon = new Pokemon()
  }

  onSubmit(){
    this.isSubmitted=true
    this.save()
  }

  save(){
    this.pokemonService.createPokemon(this.pokemon).subscribe(data=>{
      this.pokemon = new Pokemon()
      this.navigateToHome();
    },
    error => console.log(error));
  }
  navigateToHome(){
    this.router.navigate(['/home'])
  }

}
