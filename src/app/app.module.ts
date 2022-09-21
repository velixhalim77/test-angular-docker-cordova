import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateFormComponent } from './components/createForm/CreateForm.component';
import { UpdateFormComponent } from './components/updateForm/UpdateForm.component';
import { HomeComponent } from './components/home/Home.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { pokemonReducer } from './state/pokemon/pokemon.reducers';
import { PokemonEffects } from './state/pokemon/pokemon.effects';


@NgModule({
  declarations: [
    AppComponent,
    CreateFormComponent,
    UpdateFormComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    StoreModule.forRoot({pokemons:pokemonReducer}),
    StoreDevtoolsModule.instrument({
      maxAge:25,
      logOnly:environment.production
    }),
    EffectsModule.forRoot([PokemonEffects]),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
