import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CardData } from 'src/app/models/cardData';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.scss']
})
export class HandComponent implements OnInit {
  @Input() cards: CardData[];
  @Output() playedCard = new EventEmitter<CardData>();

  constructor() { }

  ngOnInit() {

  }

}
