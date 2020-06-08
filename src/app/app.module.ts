import { CardService } from './services/card-service.service';
import { AuthService } from './services/auth-service.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { GameComponent } from './containers/game/game.component';
import { CardComponent } from './compoments/card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireStorageModule } from 'angularfire2/storage';
import {MatButtonModule} from '@angular/material/button';
import * as firebase from 'firebase';
import { StoreModule } from '@ngrx/store';
import { cardReducer } from './store/card.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
firebase.initializeApp(environment.firebase);

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase, 'letslearn-dev'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    MatButtonModule,
    StoreModule.forRoot({ gameState: cardReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    })
  ],
  providers: [AuthService, CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
