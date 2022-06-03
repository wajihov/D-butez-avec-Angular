import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../Models/face-snap.Model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  /*title!: string;
  description!: string;
  createdDate!: Date;
  snap!: number;
  url!: string;*/
  liked!: boolean;
  textButton!: string;
  ngOnInit(): void {
    /*this.title = 'Archive';
    this.description = ' Mon meilleur ami depuis quelque années';
    this.createdDate = new Date();
    this.snap = 7;
    this.url =
      'https://i.pinimg.com/564x/c6/b0/2a/c6b02af9ea44fa3e0bc87e439e8c4f02.jpg';
    */
    this.liked = false;
    this.textButton = 'Oh Snap ! ';
  }

  onAddSnap() {
    this.snaped();
  }

  snaped() {
    if (this.liked == false) {
      this.faceSnap.snap++;
      this.liked = true;
      this.textButton = 'Opps onSnaps!';
    } else {
      this.faceSnap.snap--;
      this.liked = false;
      this.textButton = 'Oh Snap ! ';
    }
  }
}
