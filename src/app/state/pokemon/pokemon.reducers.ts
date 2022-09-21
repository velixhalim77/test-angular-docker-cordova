import { state } from "@angular/animations";
import { createReducer, on } from "@ngrx/store";
import { Pokemon } from "./pokemon";
import { addPokemon, deletePokemon, loadPokemon, loadPokemonFailure, loadPokemonSuccess, pokemonList } from "./pokemon.actions";


export interface PokemonState {
    pokemons: Pokemon[];
    error : string;
    status: 'pending' | 'loading' | 'error'| 'success';
}

export const initialState: PokemonState = {
    pokemons: [],
    error:'',
    status:'pending'
}

export const pokemonReducer = createReducer(
    initialState,

    on(addPokemon,(state,{content})=>({
        ...state,
        // pokemons:[...state.pokemons,{id: Number,name: String, type: String}]
    })),

    on(deletePokemon,(state,id)=>({
        ...state,
        //delete
    })),

    on(loadPokemon,(state)=>({...state, status:'loading'})),
    
    on(loadPokemonSuccess, (state,{pokemons})=>({
        ...state,
        pokemons:pokemons,
        error:"",
        status:'success'
    })),

    on(loadPokemonFailure,(state,{error})=>({
        ...state,
        error:error,
        status:'error'
    }))
    // on(pokemonList,(state)=>({
    //     ...state,

    // }))
)