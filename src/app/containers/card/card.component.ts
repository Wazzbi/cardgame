
import { CardService } from '../../services/card-service.service';
import { Component, OnInit, Input, SimpleChanges, OnDestroy, ChangeDetectorRef, Output, OnChanges } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { share } from 'rxjs/operators';
import { PokeData } from 'src/app/models/pokeData';
import { Store, props } from '@ngrx/store';
import { GameState } from 'src/app/models/gameState';
import { addCardPlayer, addCardOpponent, removeCardPlayer, removeCardOpponent } from '../../store/card.actions';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnDestroy, OnChanges {

  @Input() pokeNo: number;
  @Input() firstPlayer: boolean;
  @Output() battleAttr: EventEmitter<string> = new EventEmitter();

  imageUrl: string;
  pokeData: PokeData;
  loaded: boolean;
  subscription: Subscription;
  atrrChosen: boolean;


  constructor(public cardService: CardService,
    private changeDetector: ChangeDetectorRef,
    private store: Store<{ gameState: GameState }>) { }

  ngOnChanges() {
    this.loaded = false;
    this.atrrChosen = false;
    this.subscription = this.cardService.getPokemonImageUrl(this.pokeNo).subscribe(u => {
      this.imageUrl = u;
      this.pokeData = this.cardService.getPokemonData(this.pokeNo);

      if (this.firstPlayer) {
        this.store.dispatch(addCardPlayer({ payload: this.pokeData }));
      } else {
        this.store.dispatch(addCardOpponent({ payload: this.pokeData }));
      }

      this.loaded = true;
      this.changeDetector.detectChanges();
    });

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();

  }

  battle(compareAtrr: string) {
    this.atrrChosen = true;
    setTimeout(() => {
      this.battleAttr.emit(compareAtrr);
      this.atrrChosen = false;
    }, 1500);

  }

}
