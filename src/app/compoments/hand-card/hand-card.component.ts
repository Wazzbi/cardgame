import { Subscription } from 'rxjs';
import { CardService } from 'src/app/services/card-service.service';
import { CardData } from './../../models/cardData';
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  OnDestroy,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  selector: 'app-hand-card',
  templateUrl: './hand-card.component.html',
  styleUrls: ['./hand-card.component.scss'],
})
export class HandCardComponent implements OnInit, OnDestroy {
  @Input() card: CardData;
  @Output() playedCard = new EventEmitter<CardData>();

  itemImageUrl: string;
  subscription: Subscription;

  constructor(public cardService: CardService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.subscription = this.cardService
      .getItemImageUrl(this.card.name)
      .subscribe((x) => {
        this.itemImageUrl = x;
        this.cdr.detectChanges();
      });
  }

  // TODO: placeholder za item background-image
  // TODO: url image karty načítat ze storu nebo jinak dostat odtud do smart komponenty
  // TODO: emit smazat kartu po zahrání

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
