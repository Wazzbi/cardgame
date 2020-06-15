import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-player-hud',
  templateUrl: './player-hud.component.html',
  styleUrls: ['./player-hud.component.scss']
})
export class PlayerHudComponent implements OnInit {
  @Input() positionPlayer: boolean;

  constructor() { }

  ngOnInit() {
  }

}
