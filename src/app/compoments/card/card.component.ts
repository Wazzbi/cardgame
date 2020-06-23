import { Component, Input, Output, ChangeDetectorRef, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { GamePokeData } from 'src/app/models/gamePokeData';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit, OnChanges{
  @Input() pokeUrl: string;
  @Input() gamePokeData: GamePokeData;
  @Input() firstPlayer: boolean;
  @Input() disableButtons: boolean;
  @Output() battleAtrr: EventEmitter<string> = new EventEmitter();

  attackStatChanged = 'default';
  defenseStatChanged = 'default';
  healthStatChanged = 'default';
  speedStatChanged = 'default';

  constructor(private cdr: ChangeDetectorRef) {}
  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    // TODO: [chyba] pří načítání prvního pokémona se někdy nenačte - když na něco kliknu - načte se
    // TODO: animace pro změnu stat se aktivuje jen poprvé, což je škoda
    this.attackStatChanged =
      this.gamePokeData.attack === this.gamePokeData.originStats.attack
        ? this.attackStatChanged = 'default'
        : this.gamePokeData.attack > this.gamePokeData.originStats.attack
          ? 'increased'
          : 'decreased';

    this.defenseStatChanged =
      this.gamePokeData.defense === this.gamePokeData.originStats.defense
        ? this.defenseStatChanged = 'default'
        : this.gamePokeData.defense > this.gamePokeData.originStats.defense
          ? 'increased'
          : 'decreased';

    this.healthStatChanged =
      this.gamePokeData.health === this.gamePokeData.originStats.health
        ? this.healthStatChanged = 'default'
        : this.gamePokeData.health > this.gamePokeData.originStats.health
          ? 'increased'
          : 'decreased';

    this.speedStatChanged =
      this.gamePokeData.speed === this.gamePokeData.originStats.speed
        ? this.speedStatChanged = 'default'
        : this.gamePokeData.speed > this.gamePokeData.originStats.speed
          ? 'increased'
          : 'decreased';

    this.cdr.detectChanges();
  }

  battle(compareAtrr: string) {
    this.battleAtrr.emit(compareAtrr);
  }
}
