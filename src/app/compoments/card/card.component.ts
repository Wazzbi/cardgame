import { Component, Input, Output, ChangeDetectorRef, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { PokeData } from 'src/app/models/pokeData';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit, OnChanges{
  @Input() pokeUrl: string;
  @Input() pokeData: PokeData;
  @Input() firstPlayer: boolean;
  @Input() disableButtons: boolean;
  @Output() battleAtrr: EventEmitter<string> = new EventEmitter();

  attackStatChanged = 'default';
  defenseStatChanged = 'default';
  healthStatChanged = 'default';
  speedStatChanged = 'default';

  constructor(private cdr: ChangeDetectorRef) {}
  ngOnInit(): void {
    console.log(this.pokeData);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // TODO: [chyba] pří načítání prvního pokémona se někdy nenačte - když na něco kliknu - načte se
    // TODO: animace pro změnu stat se aktivuje jen poprvé, což je škoda
    this.attackStatChanged =
      this.pokeData.attack === this.pokeData.originStats.attack
        ? this.attackStatChanged = 'default'
        : this.pokeData.attack > this.pokeData.originStats.attack
          ? 'increased'
          : 'decreased';

    this.defenseStatChanged =
      this.pokeData.defense === this.pokeData.originStats.defense
        ? this.defenseStatChanged = 'default'
        : this.pokeData.defense > this.pokeData.originStats.defense
          ? 'increased'
          : 'decreased';

    this.healthStatChanged =
      this.pokeData.health === this.pokeData.originStats.health
        ? this.healthStatChanged = 'default'
        : this.pokeData.health > this.pokeData.originStats.health
          ? 'increased'
          : 'decreased';

    this.speedStatChanged =
      this.pokeData.speed === this.pokeData.originStats.speed
        ? this.speedStatChanged = 'default'
        : this.pokeData.speed > this.pokeData.originStats.speed
          ? 'increased'
          : 'decreased';

    this.cdr.detectChanges();
  }

  battle(compareAtrr: string) {
    this.battleAtrr.emit(compareAtrr);
  }
}
