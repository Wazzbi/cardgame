import { GameOverlayComponent } from './containers/game-overlay/game-overlay.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameComponent } from './containers/game/game.component';


const routes: Routes = [
  { path: '', component: GameOverlayComponent },
  { path: 'game', component: GameOverlayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
