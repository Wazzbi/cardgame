import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CardComponent } from './containers/card/card.component';
import { GameComponent } from './containers/game/game.component';


const routes: Routes = [
  { path: '', component: GameComponent },
  { path: 'game', component: GameComponent }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
