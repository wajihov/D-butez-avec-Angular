import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FaceSnap } from '../Models/face-snap.model';
import { FaceSnapService } from '../services/face-snap.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  liked!: boolean;
  textButton!: string;

  constructor(private faceSnapService: FaceSnapService) {}

  ngOnInit(): void {
    this.liked = false;
    this.textButton = 'Oh Snap ! ';
  }

  onAddSnap() {
    this.snaped();
  }

  snaped() {
    if (this.liked == false) {
      //this.faceSnapService.snapFaceSnapById(this.faceSnap.id);
      this.faceSnapService.snapFaceSnapByIDNinja(this.faceSnap.id, 'snap');
      this.liked = true;
      this.textButton = 'Opps onSnaps!';
    } else {
      //this.faceSnapService.unSnapFaceSnapById(this.faceSnap.id);
      this.faceSnapService.snapFaceSnapByIDNinja(this.faceSnap.id, 'unsnap');
      this.liked = false;
      this.textButton = 'Oh Snap ! ';
    }
  }
}
