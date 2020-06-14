import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { CardService } from 'src/app/services/card-service.service';
import { from, Observable, Subscription } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Store, select } from '@ngrx/store';
import { GameState } from 'src/app/models/gameState';
import { increaseScorePlayer, increaseScoreOpponent, split } from '../../store/game.actions';
import { map } from 'rxjs/operators';
import { PokeData } from 'src/app/models/pokeData';
import { addCardPlayer, addCardOpponent, removeCardPlayer, removeCardOpponent } from '../../store/card.actions';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
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
  subscription: Subscription;
  subscription2: Subscription;

  constructor(
    public cardService: CardService,
    private store: Store<{ gameState: GameState }>
  ) {
    store.pipe(select('gameState')).subscribe(res => this.gameState = res)
  }

  ngOnInit() {
    this.play();
  }

  play() {
    this.waitingForPlayerAction = true;
    this.pokeNo_1 = Math.floor(Math.random() * 9) + 1;
    this.pokeNo_2 = Math.floor(Math.random() * 9) + 1;

    this.subscription = this.cardService.getPokemonImageUrl(this.pokeNo_1).subscribe(
      url => this.pokeNo_1_url = url
    )
    this.pokeNo_1_data = this.cardService.getPokemonData(this.pokeNo_1);
    this.store.dispatch(addCardPlayer({ payload: this.pokeNo_1_data }));

    this.subscription2 = this.cardService.getPokemonImageUrl(this.pokeNo_2).subscribe(
      url => {
        this.pokeNo_2_url = url;
      }
    )
    this.pokeNo_2_data = this.cardService.getPokemonData(this.pokeNo_2);
    this.store.dispatch(addCardOpponent({ payload: this.pokeNo_2_data }));
  }

  battle(battleAtrr: string) {
    this.waitingForPlayerAction = false;

    const battleAtrributePlayer: number =
      this.gameState.players.player.activePokemon[battleAtrr];
    const battleAtrributeOpponent: number =
      this.gameState.players.opponent.activePokemon[battleAtrr];

    if (battleAtrributePlayer > battleAtrributeOpponent) {
      this.store.dispatch(increaseScorePlayer({
        payload: battleAtrributePlayer - battleAtrributeOpponent
      }));
      this.pokeNo_1 = Math.floor(Math.random() * 9) + 1;
      this.pokeNo_2 = Math.floor(Math.random() * 9) + 1;

    } else if (battleAtrributePlayer < battleAtrributeOpponent) {
      this.store.dispatch(increaseScoreOpponent({
        payload: battleAtrributeOpponent - battleAtrributePlayer
      }));
      this.pokeNo_1 = Math.floor(Math.random() * 9) + 1;
      this.pokeNo_2 = Math.floor(Math.random() * 9) + 1;

    } else {
      this.store.dispatch(split());
      this.pokeNo_1 = Math.floor(Math.random() * 9) + 1;
      this.pokeNo_2 = Math.floor(Math.random() * 9) + 1;
    }

    setTimeout(() => {
      this.play();
    }, 3000);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscription2.unsubscribe();
  }

}
