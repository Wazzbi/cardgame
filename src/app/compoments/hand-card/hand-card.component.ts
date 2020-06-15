import { CardData } from './../../models/cardData';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hand-card',
  templateUrl: './hand-card.component.html',
  styleUrls: ['./hand-card.component.scss']
})
export class HandCardComponent implements OnInit {
  @Input() card: CardData;
  @Output() playedCard = new EventEmitter<CardData>();

  constructor() { }

  ngOnInit() {
  }

  test(){
    console.log('emit dorazil');
  }

}
