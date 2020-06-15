import { CardData } from './../models/cardData';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { AngularFireStorage } from 'angularfire2/storage';
import { from, Observable } from 'rxjs';
import { PokeData } from '../models/pokeData';
import * as pokeDataJson from '../../assets/pokeData.json';
import * as cardDataJson from '../../assets/handCard.json';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private pokeDataJs: any = (pokeDataJson as any).default;
  private cardDataJs: any = (cardDataJson as any).default;
  /* private basePath = '/images';
  private fileUploads: AngularFireList<any[]>; */

  constructor(
    private afStorage: AngularFireStorage,
    private db: AngularFireDatabase
  ) {}

  /* uploadImage(name, data) {
    const promise = new Promise((res, rej) => {
      const fileName = name + ".jpg";
      const uploadTask = firebase.storage().ref(`/posts/${fileName}`).put(data);
      uploadTask.on('state_changed', function (snapshot) {
      }, function (error) {
        rej(error);
      }, function () {
        var downloadURL = uploadTask.snapshot.downloadURL;
        res(downloadURL);
      });
    });
    return promise;
  } */

  getPokemonImageUrl(pokeNo: number): Observable<string> {
    const storageRef = firebase.storage().ref().child(`images/${pokeNo}.png`);
    return from(storageRef.getDownloadURL());
  }

  getPokemonData(pokeNo: number): PokeData {
    return this.pokeDataJs[pokeNo];
  }

  getItemImageUrl(itemName: string): Observable<string> {
    const storageRef = firebase.storage().ref().child(`items/${itemName}.png`);
    return from(storageRef.getDownloadURL());
  }

  getCardData(cardIndex: number): CardData {
    return this.cardDataJs[cardIndex];
  }
}
