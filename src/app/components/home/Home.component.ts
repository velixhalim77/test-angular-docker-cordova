import { Component, ContentChild, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable, retry, throwError } from 'rxjs'
import { map, catchError } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http'
import { Pokemon } from 'src/app/state/pokemon/pokemon';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/service/PokemonService';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { selectAllPokemon, selectPokemons } from 'src/app/state/pokemon/pokemon.selectors';
import { loadPokemon } from 'src/app/state/pokemon/pokemon.actions';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit{
    pokemon: Observable<Pokemon[]> | any;
    pokemonDetail: Observable<Pokemon[]>|any;
    // pokemonRedux: Observable<Pokemon[]>|any;
    @ViewChild('closebutton') closeButton: ElementRef|any;

    

    constructor(private pokemonService: PokemonService, private router:Router,private modalService: NgbModal, private store: Store<AppState>){}
    getPokemonResponse: string | any;

    public allPokemons$ = this.store.select(selectAllPokemon);
    pokemonRedux =this.store.select(selectAllPokemon);
      ngOnInit() {
          this.store.dispatch(loadPokemon())
          this.reloadData();
          console.log(this.pokemonRedux)
      }
  
  
      async reloadData() {
        this.pokemonService.getPokemonList().subscribe((data)=>{
            this.pokemon=data    
        });
      }
  
      createForm(){
        this.router.navigate(['/create'])
      }

      detailPokemon(id: number, content: any){
        // call modal
        // this.router.navigate(['/detail',id])
        this.pokemonService.getPokemonById(id).subscribe((data)=>{
          this.pokemonDetail=data
        })
        console.log(this.pokemonDetail)
        this.modalService.open(content,{ centered: true });
      }

      updatePokemon(id: number){
        // nav to update form page
        this.router.navigate(['/update', id])
      }

      deletePokemon(id:number, content:any){
        // modal confirmation delete
        this.pokemonService.getPokemonById(id).subscribe((data)=>{
          this.pokemonDetail=data
        })
        this.modalService.open(content,{ centered: true });
      }

      deletePokemonApprove(id:number){
        // this.modalService.close()
        this.pokemonService.deletePokemon(id)
          .subscribe(
            data=>{
              console.log(data);
              this.reloadData();
            },
            error => console.log(error)
          );
        // this.closeButton.nativeElement.click()
        // console.log("terklik")
      }

      openVerticallyCentered(content: any) {
        this.modalService.open(content, { centered: true });
      }
 
}
