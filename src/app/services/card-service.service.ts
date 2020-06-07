import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { AngularFireStorage } from 'angularfire2/storage';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CardService {

  private basePath = '/images';
  private fileUploads: AngularFireList<any[]>;

  constructor(private afStorage: AngularFireStorage, private db: AngularFireDatabase) { }

  uploadImage(name, data) {
    let promise = new Promise((res, rej) => {
      let fileName = name + ".jpg";
      let uploadTask = firebase.storage().ref(`/posts/${fileName}`).put(data);
      uploadTask.on('state_changed', function (snapshot) {
      }, function (error) {
        rej(error);
      }, function () {
        var downloadURL = uploadTask.snapshot.downloadURL;
        res(downloadURL);
      });
    });
    return promise;
  }

  getPokemonImageUrl(pokeNo: number): Observable<string> {
    const storageRef = firebase.storage().ref().child(`images/${pokeNo}.png`);
    return from(storageRef.getDownloadURL());
  }

}

