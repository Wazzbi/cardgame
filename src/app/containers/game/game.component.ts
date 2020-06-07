import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card-service.service';
import { from, Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  pokeNo_1 = 1;
  pokeNo_2 = 2;

  constructor(public cardService: CardService) { }

  ngOnInit() {

  }

}
