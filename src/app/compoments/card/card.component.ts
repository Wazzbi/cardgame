
import { CardService } from './../../services/card-service.service';
import { Component, OnInit, Input, SimpleChanges, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { share } from 'rxjs/operators';
import { PokeData } from 'src/app/models/pokeData';
import { Store, props } from '@ngrx/store';
import { GameState } from 'src/app/models/gameState';
import { addCardPlayer, addCardOpponent, removeCardPlayer, removeCardOpponent } from '../../store/card.actions';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnDestroy {

  @Input() pokeNo: number;
  @Input() firstPlayer: boolean;

  imageUrl: string;
  pokeData: PokeData;
  loaded: boolean;
  subscription: Subscription;


  constructor(public cardService: CardService,
              private changeDetector: ChangeDetectorRef,
              private store: Store<{ gameState: GameState}>) { }

  ngOnInit() {
    this.subscription = this.cardService.getPokemonImageUrl(this.pokeNo).subscribe(u => {
      this.imageUrl = u;
      this.loaded = true;
      this.changeDetector.detectChanges();
    });
    this.pokeData = this.cardService.getPokemonData(this.pokeNo);
    if (this.firstPlayer) {
      this.store.dispatch(addCardPlayer({payload: this.pokeData}));
      console.log(this.store);
    } else {
      this.store.dispatch(addCardOpponent({payload: this.pokeData}));
      console.log(this.store);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();

  }

}
