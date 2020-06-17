import { Component, Input, Output, ChangeDetectorRef, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { PokeData } from 'src/app/models/pokeData';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnChanges{
  @Input() pokeUrl: string;
  @Input() pokeData: PokeData;
  @Input() firstPlayer: boolean;
  @Input() disableButtons: boolean;
  @Output() battleAtrr: EventEmitter<string> = new EventEmitter();

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    // TODO: težko říct jestli to funguje takhle tady -otestovat časem
    this.cdr.detectChanges();
  }

  battle(compareAtrr: string) {
    this.battleAtrr.emit(compareAtrr);
  }
}
