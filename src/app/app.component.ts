import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './Models/face-snap.Model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;
  ngOnInit() {
    this.mySnap = new FaceSnap(
      'Archive',
      'Mon meilleur ami depuis quelque années',
      new Date(),
      0,
      'https://i.pinimg.com/564x/c6/b0/2a/c6b02af9ea44fa3e0bc87e439e8c4f02.jpg'
    );
  }
}
