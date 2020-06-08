import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card-service.service';
import { from, Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  pokeNo_1: number;
  pokeNo_2: number;

  constructor(public cardService: CardService) { }

  ngOnInit() {
    this.pokeNo_1 = Math.floor(Math.random() * 9) + 1;
    this.pokeNo_2 = Math.floor(Math.random() * 9) + 1;
  }

}
