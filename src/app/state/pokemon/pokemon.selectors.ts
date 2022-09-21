import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { PokemonState } from "./pokemon.reducers";


export const selectPokemons = (state:AppState)=> state.pokemon;
export const selectAllPokemon = createSelector(
    selectPokemons,
    (state:PokemonState)=>state.pokemons
)