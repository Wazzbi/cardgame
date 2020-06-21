import { Component, OnInit, Input, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent {
  @Input() positionPlayer: boolean;
  @Input() pokemonImageUrl: string;
  @Input() waitingForPlayerActionEmitter: boolean;


  constructor() { }
}
