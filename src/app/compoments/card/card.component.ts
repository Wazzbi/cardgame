import { CardService } from './../../services/card-service.service';
import { Component, OnInit, Input, SimpleChanges, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { share } from 'rxjs/operators';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, OnDestroy {

  @Input() pokeNo: number;

  imageUrl: string;
  loaded: boolean;
  subscription: Subscription;


  constructor(public cardService: CardService, private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
    this.subscription = this.cardService.getPokemonImageUrl(this.pokeNo).subscribe(u => {
      this.imageUrl = u;
      this.loaded = true;
      this.changeDetector.detectChanges();
    });

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();

  }

}
