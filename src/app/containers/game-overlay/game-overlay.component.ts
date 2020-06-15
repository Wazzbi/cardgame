import { CardData } from './../../models/cardData';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CardService } from 'src/app/services/card-service.service';
import { Store, select } from '@ngrx/store';
import { GameState } from 'src/app/models/gameState';
import { Subscription } from 'rxjs';
import { apllyCardEffectToPlayersActivePokemon } from 'src/app/store/hand-card.actions';

@Component({
  selector: 'app-game-overlay',
  templateUrl: './game-overlay.component.html',
  styleUrls: ['./game-overlay.component.scss']
})
export class GameOverlayComponent implements OnInit, OnDestroy {
  gameState: GameState;
  subscription: Subscription;

  constructor(
    public cardService: CardService,
    private store: Store<{ gameState: GameState }>
  ) {
    this.subscription = store.pipe(select('gameState')).subscribe((res) => (this.gameState = res));
  }

  ngOnInit() {
  }

  // TODO: po odehrání kartu odebrat z ruky. akce je připravená
  playedCard(card: CardData){
    console.log('emit dorazil', card);
    this.store.dispatch(apllyCardEffectToPlayersActivePokemon({ payload: card }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
