import { createAction, props } from "@ngrx/store";
import { Pokemon } from "./pokemon";


export const pokemonList = createAction(
    '[Pokemon Page] List Pokemon',
    props<{content: any}>()
);

export const pokemonById = createAction(
    '[Pokemon Page] Pokemon By ID',
    props<{content:any}>()
);

export const addPokemon = createAction(
    '[Pokemon Page] Add Pokemon',
    props<{content: any}>()
);

export const updatePokemon = createAction(
    '[Pokemon Page] Update Pokemon',
    props<{content:any}>()
);

export const deletePokemon = createAction(
    '[Pokemon Page] Delete Pokemon',
    props<{id:number}>()
)

export const loadPokemon = createAction(
    '[Pokemona Page] Load Pokemon'
);

export const loadPokemonSuccess = createAction(
    '[Pokemon Page] Pokemon Load Success',
    props<{pokemons:Pokemon[]}>()
);

export const loadPokemonFailure = createAction(
    '[Pokemon Page] Pokemon Load Failure',
    props<{error:string}>()
);


