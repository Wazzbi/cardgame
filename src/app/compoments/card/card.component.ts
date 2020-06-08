import { CardService } from './../../services/card-service.service';
import { Component, OnInit, Input, SimpleChanges, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { share } from 'rxjs/operators';
import { PokeData } from 'src/app/models/pokeData';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnDestroy {

  @Input() pokeNo: number;
  @Input() firstPlayer: boolean;

  imageUrl: string;
  pokeData: PokeData;
  loaded: boolean;
  subscription: Subscription;


  constructor(public cardService: CardService, private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
    this.subscription = this.cardService.getPokemonImageUrl(this.pokeNo).subscribe(u => {
      this.imageUrl = u;
      this.loaded = true;

      this.changeDetector.detectChanges();
    });
    this.pokeData = this.cardService.getPokemonData(this.pokeNo);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();

  }

}
