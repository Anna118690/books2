import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    const firebaseConfig = {
    apiKey: "AIzaSyDeJZWw4Zo8YOmrbwWHBFOMJMjepyWnNBs",
    authDomain: "books2-4f5d8.firebaseapp.com",
    databaseURL: "https://books2-4f5d8.firebaseio.com",
    projectId: "books2-4f5d8",
    storageBucket: "books2-4f5d8.appspot.com",
    messagingSenderId: "544235117001",
    appId: "1:544235117001:web:fe5297b84655f8f3d87018",
    measurementId: "G-NQJMHQ2MS0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  }
}
