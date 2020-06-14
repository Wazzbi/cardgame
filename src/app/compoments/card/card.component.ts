
import { CardService } from '../../services/card-service.service';
import { Component, OnInit, Input, SimpleChanges, OnDestroy, ChangeDetectorRef, Output, OnChanges } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { share } from 'rxjs/operators';
import { PokeData } from 'src/app/models/pokeData';
import { Store, props } from '@ngrx/store';
import { GameState } from 'src/app/models/gameState';
import {
  addCardPlayer,
  addCardOpponent,
  removeCardPlayer,
  removeCardOpponent
} from '../../store/card.actions';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() pokeUrl: string;
  @Input() pokeData: PokeData;
  @Input() firstPlayer: boolean;
  @Input() disableButtons: boolean;
  @Output() battleAtrr: EventEmitter<string> = new EventEmitter();


  constructor() { }



  battle(compareAtrr: string) {
    this.battleAtrr.emit(compareAtrr);
  }
}
