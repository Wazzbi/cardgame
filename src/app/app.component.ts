import { CardService } from './services/card-service.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth-service.service';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'cardgame';
  user = null;

  constructor(
    private auth: AuthService, public db: AngularFireDatabase, public cardService: CardService) { }

  ngOnInit() {
    // TODO: autorizaci dodělal
    // this.auth.getAuthState().subscribe(
    //   (user) => this.user = user);
  }

  loginWithGoogle() {
    this.auth.loginWithGoogle();
  }
}
