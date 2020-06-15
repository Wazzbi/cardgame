import { Component, OnInit, Input } from '@angular/core';
import { CardData } from 'src/app/models/cardData';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.scss']
})
export class HandComponent implements OnInit {
  @Input() cards: CardData[];

  constructor() { }

  ngOnInit() {

  }

}
