import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../Models/face-snap.Model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  liked!: boolean;
  textButton!: string;
  ngOnInit(): void {
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
