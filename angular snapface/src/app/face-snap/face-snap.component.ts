import { Component, OnInit ,Input} from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { faceSnapService } from '../services/face-snap.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  constructor(private faceSnapService:faceSnapService,
    private router:Router
    ){

  }


  @Input() faceSnap!:FaceSnap;
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
     this.btnTitle="Oh snap!"
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

   onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
}
}

