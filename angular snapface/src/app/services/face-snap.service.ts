import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
  providedIn:"root"
})
export class faceSnapService{

  faceSnaps: FaceSnap[] = [
      {
        id:1,
        title: 'Archibald',
        description: 'Mon meilleur ami depuis tout petit !',
        imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        date: new Date(),
        snap: 154,
        location: 'Paris'
      },
      {
        id:2,
        title: 'Three Rock Mountain',
        description: 'Un endroit magnifique pour les randonnées.',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
        date: new Date(),
        snap: 6,
        location: 'la montagne'
      },
      {
        id:3,
        title: 'Un bon repas',
        description: 'Mmmh que c\'est bon !',
        imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
        date: new Date(),
        snap: 500
      }
    ];

    getAllFaceSnaps():FaceSnap[]{
      return this.faceSnaps;
    }

    snapFaceSnapById(id:number,snapType:"snap" | "unsnap"){
      var faceSnap=this.faceSnaps.find(e=> e.id=== id);
      if(faceSnap){
       snapType=="snap"?faceSnap.snap++:faceSnap.snap--;
      }else{
        throw new Error('FaceSnap not found!')
      }
    }

    getFaceSnapById(id:number){
      var faceSnap=this.faceSnaps.find(e=> e.id=== id);
      if(faceSnap){
       return faceSnap
      }else{
        throw new Error('FaceSnap not found!')
      }
    }


}
