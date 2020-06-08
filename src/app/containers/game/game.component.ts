import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card-service.service';
import { from, Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Store, select } from '@ngrx/store';
import { GameState } from 'src/app/models/gameState';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  pokeNo_1: number;
  pokeNo_2: number;
  gameState$: Observable<GameState>;

  constructor(public cardService: CardService, private store: Store<{ gameState: GameState }>) {
    this.gameState$ = store.pipe(select('gameState'));
  }

  ngOnInit() {
    this.pokeNo_1 = Math.floor(Math.random() * 9) + 1;
    this.pokeNo_2 = Math.floor(Math.random() * 9) + 1;
  }

}
