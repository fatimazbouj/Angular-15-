import { Component, Input } from '@angular/core';
import { faceSnapService } from '../services/face-snap.service';
import { FaceSnap } from '../models/face-snap.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap-component',
  templateUrl: './single-face-snap-component.component.html',
  styleUrls: ['./single-face-snap-component.component.scss']
})
export class SingleFaceSnapComponentComponent {
  constructor(private faceSnapService:faceSnapService,
    private route:ActivatedRoute
    ){

  }


 faceSnap!:FaceSnap;
  // title!:string;
  // description!:string;
  // date!:Date;
  // snap!:number;
  // imageUrl!:string
   btnTitle!:string

  ngOnInit(){

    // this.title="Quraan";
    // this.description="Mon meilleur ami depuis l'enfance!";
    // this.date=new Date();
    // this.snap=6;
    // this.imageUrl="https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg"
     this.btnTitle="Oh snap!";
     //le + devant le parametre permet de caster le string en number
     const snapId=+this.route.snapshot.params['id'];
     this.faceSnap=this.faceSnapService.getFaceSnapById(snapId);
  }

   onSnap(){
     if(this.btnTitle=="Oh snap!"){
       this.faceSnapService.snapFaceSnapById(this.faceSnap.id,"snap");
       this.btnTitle="oups unsnap!";
     }else{
       this.faceSnapService.snapFaceSnapById(this.faceSnap.id,"unsnap");
       this.btnTitle="Oh snap!";
     }
   }
}
