import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  form: any = {};
  form2: any = {};
  questionaffich : any;

  
     
  msg=true;
  test=false;
   test1=false;
   test2=false;
   test3=false; 
   test4=false; 
   test5=false;
   data=[];
   
  errorMessage = '';
  content: string;
  idblocs:number;
  idscript:number;
  constructor(private userService: UserService ,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllQuestion() 
    this.idblocs= this.route.snapshot.params['idblocs'];
    console.log(this.idblocs)

    this.idscript= this.route.snapshot.params['idscript'];
    console.log(this.idscript)
  }

  reloadPage() {
    window.location.reload();
 }

 


 onSubmit(): void {
  this.form.liaison= this.idscript;
  this.form.liaisonblocs= this.idblocs;
  
  
  this.data.push(this.form);
  console.log(JSON.stringify(this.data));
  /*
  this.userService.getAdminBoard(this.form).subscribe(
    data => {
  console.log(data);
      window.location.reload();
    },
    err => {
      this.errorMessage = err.error.message;
      
    }
  );*/
}


getAllQuestion():void {
  this.userService.getAllQuestion().subscribe(data=>{
    this.questionaffich=data;
    var t=this.questionaffich[0].propositon1
console.log( this.questionaffich)
    
 
  })

}


myFunction(): void{
  var k=(<HTMLInputElement>document.getElementById("tentacles")).value; 
  
  console.log(k );
  if((<HTMLInputElement>document.getElementById("type")).value==null ){
    this.msg=true;
    this.test=false;
    this.test1=false;
    this.test2=false;
    this.test3=false;
    this.test4=false;
    this.test5=false;
    }

if( Number(k) == 1 &&((<HTMLInputElement>document.getElementById("type")).value=="checkbox" ||(<HTMLInputElement>document.getElementById("type")).value=="radio") ){
  this.msg=false;
  
this.test=true;
this.test1=true;
this.test2=false;
this.test3=false;
this.test4=false;
this.test5=false;
}
if( Number(k)== 2 &&((<HTMLInputElement>document.getElementById("type")).value=="checkbox" ||(<HTMLInputElement>document.getElementById("type")).value=="radio")){
  this.msg=false;
  this.test=true;
  this.test1=true;
  this.test2=true;
  this.test3=false;
this.test4=false;
this.test5=false;
}
if( Number(k)== 3 &&((<HTMLInputElement>document.getElementById("type")).value=="checkbox" ||(<HTMLInputElement>document.getElementById("type")).value=="radio") ){
  this.msg=false;
  this.test=true;
  this.test1=true;
  this.test2=true;
  this.test3=true;
  this.test4=false;
  this.test5=false;

}
if( Number(k)== 4  &&((<HTMLInputElement>document.getElementById("type")).value=="checkbox" ||(<HTMLInputElement>document.getElementById("type")).value=="radio")){
  this.msg=false;
  this.test=true;
  this.test1=true;
  this.test2=true;
  this.test3=true;
  this.test4=true;
  this.test5=false;
}

if( Number(k)== 5 &&((<HTMLInputElement>document.getElementById("type")).value=="checkbox" ||(<HTMLInputElement>document.getElementById("type")).value=="radio") ){
  this.msg=false;
  this.test=true;
  this.test1=true;
  this.test2=true;
  this.test3=true;
  this.test4=true;
  this.test5=true;
}


if( ((Number(k)== 1)  || (Number(k)== 2)|| (Number(k)== 3)|| (Number(k)== 4)|| (Number(k)== 4))&&((<HTMLInputElement>document.getElementById("type")).value=="text" )){
  this.test=true;
  this.test1=false;
  this.test2=false;
  this.test3=false;
  this.test4=false;
  this.test5=false;
}


}

myFunction2(): void{
  var k=this.questionaffich;
  /*
  for(const i in k){
   
    console.log((<HTMLInputElement>document.getElementById(k[i].id)).value)
   
  }
  */
  console.log((<HTMLInputElement>document.getElementById("type")).value)
}


deleteQuestion(id: number ){
  this.userService.deleteQuestion(id).subscribe(data =>{
console.log(data);
window.location.reload();
  })

}



}
