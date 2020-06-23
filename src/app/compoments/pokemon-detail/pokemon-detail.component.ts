import { Component, OnInit, Input, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { PokeData } from 'src/app/models/pokeData';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent {
  @Input() positionPlayer: boolean;
  @Input() pokeData: PokeData;
  @Input() waitingForPlayerActionEmitter: boolean;


  constructor() { }
}
