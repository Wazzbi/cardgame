import { Component, Input } from '@angular/core';
import { GamePokeData } from 'src/app/models/gamePokeData';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent {
  @Input() positionPlayer: boolean;
  @Input() gamePokeData: GamePokeData;
  @Input() waitingForPlayerActionEmitter: boolean;


  constructor() { }
}
