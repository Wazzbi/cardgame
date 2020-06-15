import { CardData } from './../../models/cardData';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hand-card',
  templateUrl: './hand-card.component.html',
  styleUrls: ['./hand-card.component.scss']
})
export class HandCardComponent implements OnInit {
  @Input() card: CardData;

  constructor() { }

  ngOnInit() {
  }

}
