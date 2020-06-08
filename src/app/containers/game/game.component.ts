import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card-service.service';
import { from, Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Store, select } from '@ngrx/store';
import { GameState } from 'src/app/models/gameState';
import { increaseScorePlayer, increaseScoreOpponent, split } from '../../store/game.actions';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  pokeNo_1: number;
  pokeNo_2: number;
  gameState: GameState;

  constructor(public cardService: CardService, private store: Store<{ gameState: GameState }>) {
    store.pipe(select('gameState')).subscribe(res => this.gameState = res);
  }

  ngOnInit() {
    this.pokeNo_1 = Math.floor(Math.random() * 9) + 1;
    this.pokeNo_2 = Math.floor(Math.random() * 9) + 1;
  }

  battle(battleAtrr: string) {
    const battleAtrributePlayer = this.gameState.players.player.activePokemon[battleAtrr];
    const battleAtrributeOpponent = this.gameState.players.opponent.activePokemon[battleAtrr];

    if (battleAtrributePlayer > battleAtrributeOpponent) {
      this.store.dispatch(increaseScorePlayer({ payload: battleAtrributePlayer - battleAtrributeOpponent }));
      this.pokeNo_1 = Math.floor(Math.random() * 9) + 1;
      this.pokeNo_2 = Math.floor(Math.random() * 9) + 1;
    } else if (battleAtrributePlayer < battleAtrributeOpponent) {
      this.store.dispatch(increaseScoreOpponent({ payload: battleAtrributeOpponent - battleAtrributePlayer }));
      this.pokeNo_1 = Math.floor(Math.random() * 9) + 1;
      this.pokeNo_2 = Math.floor(Math.random() * 9) + 1;
    } else {
      this.store.dispatch(split());
      this.pokeNo_1 = Math.floor(Math.random() * 9) + 1;
      this.pokeNo_2 = Math.floor(Math.random() * 9) + 1;
    }
  }

}
