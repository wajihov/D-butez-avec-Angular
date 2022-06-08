import { Injectable } from '@angular/core';
import { FaceSnap } from '../Models/face-snap.model';

@Injectable({
  providedIn: 'root',
})
export class FaceSnapService {
  myFaceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: 'Archive',
      description: 'Mon meilleur ami depuis quelque années',
      createdDate: new Date(),
      snap: 900,
      url: 'https://i.pinimg.com/564x/c6/b0/2a/c6b02af9ea44fa3e0bc87e439e8c4f02.jpg',
      location: 'Paris',
    },
    {
      id: 2,
      title: 'Three rock Maintain',
      description: 'un endoroit magnefique pour les rondonnées',
      createdDate: new Date(),
      snap: 0,
      url: 'https://diapogram.com/upload/2019/04/11/20190411135302-b9fce877.jpg',
      location: 'ENGLAND',
    },
    {
      id: 3,
      title: 'Un bon repas',
      description: 'Mumm ce qui est bon ! ',
      createdDate: new Date(),
      snap: 0,
      url: 'https://p4.wallpaperbetter.com/wallpaper/869/719/717/cuisine-food-india-indian-wallpaper-preview.jpg',
    },
    {
      id: 4,
      title: 'Archive',
      description: 'Mon meilleur ami depuis quelque années',
      createdDate: new Date(),
      snap: 100,
      url: 'https://i.pinimg.com/564x/c6/b0/2a/c6b02af9ea44fa3e0bc87e439e8c4f02.jpg',
      location: 'Paris',
    },
    {
      id: 5,
      title: 'Three rock Maintain',
      description: 'un endoroit magnefique pour les rondonnées',
      createdDate: new Date(),
      snap: 0,
      url: 'https://diapogram.com/upload/2019/04/11/20190411135302-b9fce877.jpg',
      location: 'ENGLAND',
    },
    {
      id: 6,
      title: 'Un bon repas',
      description: 'Mumm ce qui est bon ! ',
      createdDate: new Date(),
      snap: 0,
      url: 'https://p4.wallpaperbetter.com/wallpaper/869/719/717/cuisine-food-india-indian-wallpaper-preview.jpg',
    },
  ];

  getFacesnapById(facesnapById: number): FaceSnap {
    const faceSnap = this.myFaceSnaps.find(
      (faceSnap) => faceSnap.id === facesnapById
    );
    if (!faceSnap) {
      throw new Error('Facesnap Not Found');
    } else {
      return faceSnap;
    }
  }

  getAllFaceSnaps(): FaceSnap[] {
    return this.myFaceSnaps;
  }

  snapFaceSnapByIDNinja(
    facesnapById: number,
    snapType: 'snap' | 'unsnap'
  ): void {
    const facesnap = this.getFacesnapById(facesnapById);
    snapType === 'snap' ? facesnap.snap++ : facesnap.snap--;
  }

  snapFaceSnapById(faceSnapId: number): void {
    const faceSnap = this.myFaceSnaps.find(
      (faceSnap) => faceSnap.id === faceSnapId
    );
    if (faceSnap) {
      faceSnap.snap++;
    } else {
      throw new Error('Facesnap Not Found');
    }
  }
  unSnapFaceSnapById(faceSnapId: number): void {
    const faceSnap = this.myFaceSnaps.find(
      (faceSnap) => faceSnap.id === faceSnapId
    );
    if (faceSnap) {
      faceSnap.snap--;
    } else {
      throw new Error('Facesnap Not Found');
    }
  }
}
