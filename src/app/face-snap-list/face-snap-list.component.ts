import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../Models/face-snap.model';
import { FaceSnapService } from '../services/face-snap.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss'],
})
export class FaceSnapListComponent implements OnInit {
  myFaceSnaps!: FaceSnap[];

  constructor(private serviceSnapFace: FaceSnapService) {}

  ngOnInit(): void {
    this.myFaceSnaps = this.serviceSnapFace.getAllFaceSnaps();
  }
}
