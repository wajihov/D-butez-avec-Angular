import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './Models/face-snap.Model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  myFaceSnaps!: FaceSnap[];
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;
  ngOnInit() {
    this.myFaceSnaps = [
      {
        title: 'Archive',
        description: 'Mon meilleur ami depuis quelque années',
        createdDate: new Date(),
        snap: 0,
        url: 'https://i.pinimg.com/564x/c6/b0/2a/c6b02af9ea44fa3e0bc87e439e8c4f02.jpg',
        location: 'Paris',
      },
      {
        title: 'Three rock Maintain',
        description: 'un endoroit magnefique pour les rondonnées',
        createdDate: new Date(),
        snap: 0,
        url: 'https://diapogram.com/upload/2019/04/11/20190411135302-b9fce877.jpg',
        location: 'ENGLAND',
      },
      {
        title: 'Un bon repas',
        description: 'Mumm ce qui est bon ! ',
        createdDate: new Date(),
        snap: 0,
        url: 'https://p4.wallpaperbetter.com/wallpaper/869/719/717/cuisine-food-india-indian-wallpaper-preview.jpg',
      },
      {
        title: 'Archive',
        description: 'Mon meilleur ami depuis quelque années',
        createdDate: new Date(),
        snap: 0,
        url: 'https://i.pinimg.com/564x/c6/b0/2a/c6b02af9ea44fa3e0bc87e439e8c4f02.jpg',
        location: 'Paris',
      },
      {
        title: 'Three rock Maintain',
        description: 'un endoroit magnefique pour les rondonnées',
        createdDate: new Date(),
        snap: 0,
        url: 'https://diapogram.com/upload/2019/04/11/20190411135302-b9fce877.jpg',
        location: 'ENGLAND',
      },
      {
        title: 'Un bon repas',
        description: 'Mumm ce qui est bon ! ',
        createdDate: new Date(),
        snap: 0,
        url: 'https://p4.wallpaperbetter.com/wallpaper/869/719/717/cuisine-food-india-indian-wallpaper-preview.jpg',
      },
    ];

    this.mySnap = {
      title: 'Archive',
      description: 'Mon meilleur ami depuis quelque années',
      createdDate: new Date(),
      snap: 0,
      url: 'https://i.pinimg.com/564x/c6/b0/2a/c6b02af9ea44fa3e0bc87e439e8c4f02.jpg',
      location: 'Paris',
    };
    this.myOtherSnap = {
      title: 'Three rock Maintain',
      description: 'un endoroit magnefique pour les rondonnées',
      createdDate: new Date(),
      snap: 0,
      url: 'https://diapogram.com/upload/2019/04/11/20190411135302-b9fce877.jpg',
      location: 'ENGLAND',
    };
    this.myLastSnap = {
      title: 'Un bon repas',
      description: 'Mumm ce qui est bon ! ',
      createdDate: new Date(),
      snap: 0,
      url: 'https://p4.wallpaperbetter.com/wallpaper/869/719/717/cuisine-food-india-indian-wallpaper-preview.jpg',
    };
  }
}
