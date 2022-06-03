import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './Models/face-snap.Model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;
  ngOnInit() {
    this.mySnap = new FaceSnap(
      'Archive',
      'Mon meilleur ami depuis quelque années',
      new Date(),
      0,
      'https://i.pinimg.com/564x/c6/b0/2a/c6b02af9ea44fa3e0bc87e439e8c4f02.jpg'
    );
    this.myOtherSnap = new FaceSnap(
      'Three rock Maintain',
      'un endoroit magnefique pour les rondonnées',
      new Date(),
      0,
      'https://diapogram.com/upload/2019/04/11/20190411135302-b9fce877.jpg'
    );
    this.myLastSnap = new FaceSnap(
      'Un bon repas',
      'Mumm ce qui est bon ! ',
      new Date(),
      0,
      'https://p4.wallpaperbetter.com/wallpaper/869/719/717/cuisine-food-india-indian-wallpaper-preview.jpg'
    );
  }
}
