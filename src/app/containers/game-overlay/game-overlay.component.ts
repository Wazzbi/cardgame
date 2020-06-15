import { Component, OnInit, OnDestroy } from '@angular/core';
import { CardService } from 'src/app/services/card-service.service';
import { Store, select } from '@ngrx/store';
import { GameState } from 'src/app/models/gameState';
import { Subscription } from 'rxjs';

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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
