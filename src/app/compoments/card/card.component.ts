import { Component, Input, Output } from '@angular/core';
import { PokeData } from 'src/app/models/pokeData';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() pokeUrl: string;
  @Input() pokeData: PokeData;
  @Input() firstPlayer: boolean;
  @Input() disableButtons: boolean;
  @Output() battleAtrr: EventEmitter<string> = new EventEmitter();

  constructor() {}

  battle(compareAtrr: string) {
    this.battleAtrr.emit(compareAtrr);
  }
}
