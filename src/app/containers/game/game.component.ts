import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { CardService } from 'src/app/services/card-service.service';
import { from, Observable, Subscription } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Store, select } from '@ngrx/store';
import { GameState } from 'src/app/models/gameState';
import {
  increaseScorePlayer,
  increaseScoreOpponent,
  split,
} from '../../store/game.actions';
import { map } from 'rxjs/operators';
import { PokeData } from 'src/app/models/pokeData';
import {
  addCardPlayer,
  addCardOpponent,
  removeCardPlayer,
  removeCardOpponent,
} from '../../store/card.actions';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit, OnDestroy {
  pokeNo_1: number;
  pokeNo_2: number;
  pokeNo_1_url: string;
  pokeNo_2_url: string;
  pokeNo_1_data: PokeData;
  pokeNo_2_data: PokeData;
  gameState: GameState;
  waitingForPlayerAction: boolean;
  battleAtrributePlayer: number;
  battleAtrributeOpponent: number;
  disableButtons: boolean;
  subscription: Subscription;
  subscription2: Subscription;

  constructor(
    public cardService: CardService,
    private store: Store<{ gameState: GameState }>
  ) {
    store.pipe(select('gameState')).subscribe((res) => (this.gameState = res));
  }

  ngOnInit() {
    this.play();
  }

  play() {
    this.waitingForPlayerAction = true;
    this.disableButtons = false;
    this.pokeNo_1 = Math.floor(Math.random() * 9) + 1;
    this.pokeNo_2 = Math.floor(Math.random() * 9) + 1;

    this.subscription = this.cardService
      .getPokemonImageUrl(this.pokeNo_1)
      .subscribe((url) => (this.pokeNo_1_url = url));
    this.pokeNo_1_data = this.cardService.getPokemonData(this.pokeNo_1);
    this.store.dispatch(addCardPlayer({ payload: this.pokeNo_1_data }));

    this.subscription2 = this.cardService
      .getPokemonImageUrl(this.pokeNo_2)
      .subscribe((url) => {
        this.pokeNo_2_url = url;
      });
    this.pokeNo_2_data = this.cardService.getPokemonData(this.pokeNo_2);
    this.store.dispatch(addCardOpponent({ payload: this.pokeNo_2_data }));
  }

  battle(battleAtrr: string) {
    this.waitingForPlayerAction = false;
    this.disableButtons = true;

    this.battleAtrributePlayer = this.gameState.players.player.activePokemon[
      battleAtrr
    ];
    this.battleAtrributeOpponent = this.gameState.players.opponent.activePokemon[
      battleAtrr
    ];

    if (this.battleAtrributePlayer > this.battleAtrributeOpponent) {
      this.store.dispatch(
        increaseScorePlayer({
          payload: this.battleAtrributePlayer - this.battleAtrributeOpponent,
        })
      );
      // TODO: v budoucnu udělat na výběr z balíku
      this.pokeNo_1 = Math.floor(Math.random() * 9) + 1;
      this.pokeNo_2 = Math.floor(Math.random() * 9) + 1;
    } else if (this.battleAtrributePlayer < this.battleAtrributeOpponent) {
      this.store.dispatch(
        increaseScoreOpponent({
          payload: this.battleAtrributeOpponent - this.battleAtrributePlayer,
        })
      );
      this.pokeNo_1 = Math.floor(Math.random() * 9) + 1;
      this.pokeNo_2 = Math.floor(Math.random() * 9) + 1;
    } else {
      this.store.dispatch(split());
      this.pokeNo_1 = Math.floor(Math.random() * 9) + 1;
      this.pokeNo_2 = Math.floor(Math.random() * 9) + 1;
    }

    setTimeout(() => {
      this.disableButtons = false;
      this.play();
    }, 3000);
  }

  // TODO: mechanika na lízání karet
  /* drawCard(){

  } */

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscription2.unsubscribe();
  }
}
