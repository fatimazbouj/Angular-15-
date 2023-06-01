
export class FaceSnap{
  id!:number;
  title!:string;
  description!:string;
  date!:Date;
  snap!:number;
  imageUrl!:string;


  constructor(
    id:number,
    title:string,description:string,
    date:Date,snap:number,
    imageUrl:string,
    //puplic nous permet d'ajouté une ptoprieté son la déclaré dans la classe
    //? signifie que la proprieté est optionelle
    public location?:string
    ){
      this.id=id;
    this.title=title;
    this.description=description;
    this.date=date;
    this.snap=snap;
    this.imageUrl=imageUrl;
  }

}
