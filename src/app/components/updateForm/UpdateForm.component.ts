import { Component, OnInit } from '@angular/core';
import { Observable, retry, throwError } from 'rxjs'
import { map, catchError } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http'
import { Pokemon } from 'src/app/state/pokemon/pokemon';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from 'src/app/service/PokemonService';

@Component({
  selector: 'create-form',
  templateUrl: './UpdateForm.component.html',
  styleUrls: ['./UpdateForm.component.css']
})
export class UpdateFormComponent implements OnInit{
  pokemon: Pokemon |any;
  isSubmitted : false | any;
  id: number|any;

  constructor(private route: ActivatedRoute,private pokemonService: PokemonService, private router:Router){}
  ngOnInit(): void {
    this.pokemon = new Pokemon();

    this.id = this.route.snapshot.params['id'];

    this.pokemonService.getPokemonById(this.id)
    .subscribe(data=>{
      console.log(data)
      this.pokemon = data
    }, error=> console.log(error))
  }
  
  onSubmit(){
    this.updatePokemon();
  }

  updatePokemon(){
    this.pokemonService.updatePokemon(this.id, this.pokemon)
    .subscribe(data=>{
      console.log(data)
      this.pokemon = new Pokemon();
      this.navigateToHome();
    }, error => console.log(error))
  }

  navigateToHome(){
    this.router.navigate(['home'])
  }
}
