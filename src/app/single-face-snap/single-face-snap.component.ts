import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../Models/face-snap.model';
import { FaceSnapService } from '../services/face-snap.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss'],
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;
  textButton!: string;

  constructor(
    private faceSnapService: FaceSnapService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.textButton = 'Oh Snap ! ';
    const facesnapId = +this.route.snapshot.params['id'];
    this.faceSnap=this.faceSnapService.getFacesnapById(facesnapId);
  }

  onAddSnap() {
    this.snaped();
  }

  snaped() {
    if (this.textButton === 'Oh Snap ! ') {
      this.faceSnapService.snapFaceSnapByIDNinja(this.faceSnap.id, 'snap');
      this.textButton = 'Opps onSnaps!';
    } else {
      this.faceSnapService.snapFaceSnapByIDNinja(this.faceSnap.id, 'unsnap');
      this.textButton = 'Oh Snap ! ';
    }
  }
}
