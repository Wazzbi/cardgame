import { PokeData } from 'src/app/models/pokeData';
import { CardData } from './../../models/cardData';
import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { CardService } from 'src/app/services/card-service.service';
import { Store, select } from '@ngrx/store';
import { GameState } from 'src/app/models/gameState';
import { Subscription } from 'rxjs';
import { apllyCardEffectToPlayersActivePokemon, removeCardFromPlayersHand } from 'src/app/store/hand-card.actions';

// TODO: lepší layout html bez position:absolute a tak
@Component({
  selector: 'app-game-overlay',
  templateUrl: './game-overlay.component.html',
  styleUrls: ['./game-overlay.component.scss'],
})
export class GameOverlayComponent implements OnDestroy {
  gameState: GameState;
  subscription: Subscription;
  playerPokemonImgUrl: string;
  opponentPokemonImgUrl: string;

  waitingForPlayerActionEmitter: boolean;

  constructor(
    public cardService: CardService,
    private store: Store<{ gameState: GameState }>
  ) {
    this.subscription = store
      .pipe(select('gameState'))
      .subscribe((res) => (this.gameState = res));
  }

  getWaitingForPlayerEmitter(result: boolean) {
    this.waitingForPlayerActionEmitter = result;
  }

  // TODO: po odehrání kartu odebrat z ruky. akce je připravená
  playedCard(card: CardData) {
    this.store.dispatch(
      apllyCardEffectToPlayersActivePokemon({ payload: card })
    );
    this.store.dispatch(
      removeCardFromPlayersHand({ payload: card.cardIndexInHand })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
