import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { from, of} from "rxjs";
import { switchMap, map, catchError,withLatestFrom } from "rxjs/operators";
import { PokemonService } from "src/app/service/PokemonService";
import { AppState } from "../app.state";
import { addPokemon, deletePokemon, loadPokemon, loadPokemonFailure, loadPokemonSuccess, pokemonById } from "./pokemon.actions";
import { selectAllPokemon } from "./pokemon.selectors";


@Injectable()
export class PokemonEffects{
    constructor(
        private actions$: Actions,
        private store: Store<AppState>,
        private pokemonService:PokemonService
    ){}

    loadPokemon$ = createEffect(()=>
        this.actions$.pipe(
            ofType(loadPokemon),
            switchMap(()=>
                from(this.pokemonService.getPokemonList()).pipe(
                    map((pokemons)=> 
                        loadPokemonSuccess({pokemons:pokemons})
                    ),
                    catchError((error)=>of(loadPokemonFailure({error})))
                )
            )
        )    
    );

    // savePokemons$ = createEffect(()=>
    //   this.actions$.pipe(
    //     ofType(addPokemon),
    //     withLatestFrom(this.store.select(selectAllPokemon)),
    //     switchMap(([action,pokemons])=>from(this.pokemonService.createPokemon(pokemons)))
    //   ),
      
    //   {dispatch:false}
    // );

    // deletePokemons$ = createEffect(()=>
    //     this.actions$.pipe(
    //         ofType(deletePokemon),
    //         withLatestFrom(this.store.select(selectAllPokemon)),
    //         switchMap(([action,pokemons])=>from(this.pokemonService.deletePokemon(pokemons)))
    //     )
    // )

}