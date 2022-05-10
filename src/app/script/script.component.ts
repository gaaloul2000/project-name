import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-script',
  templateUrl: './script.component.html',
  styleUrls: ['./script.component.css']
})
export class ScriptComponent implements OnInit {
  idbloc:number;
  form: any = {};
  formscript: any = {};
  errorMessage = '';
  datascript=[];
  msg=true;
  test=false;
   test1=false;
   test2=false;
   test3=false; 
   test4=false; 
   test5=false;
   alert:String;
   dataquestion:any= [];
   questionaffich : any;
  k: number;
  test88:any =[];
  boleanaffich=false;
   
  constructor(private userService: UserService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmitscript( ): void {
    
 if((<HTMLInputElement>document.getElementById("scriptName")).value == ""||
 (<HTMLInputElement>document.getElementById("startDate")).value == ""||
 (<HTMLInputElement>document.getElementById("endDate")).value == ""||
 (<HTMLInputElement>document.getElementById("scriptPool")).value == ""){
  this.alert="remplire tous les champs"

 }
else {
     


      this.datascript.push({scriptName:this.formscript.scriptName,
        
        startDate:this.formscript.startDate,
        endDate:this.formscript.endDate,
        scriptPool:this.formscript.scriptPool  
      /*  questions:this.test88 */
      })

      console.log(this.datascript);
      
      sessionStorage.setItem('datascript',JSON.stringify(this.datascript));
      this.router.navigate(['langue'])
    }   
      
   /*
    if(k=0){
    this.datascript.push(this.formscript);
    console.log(this.datascript)
     }*/
      /*
    this.userService.addscript(this.form).subscribe(
      data => {
    
    var k=data.length;
    this.idbloc =data[k-1].id;
       console.log("1"+this.idbloc);
       this.router.navigateByUrl('/blocs/'+this.idbloc );
      },
      err => {
        this.errorMessage = err.error.message;
        
      }
    );
    

  */


    
    
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


  
  onSubmit(): void {
    
    
    
    
    this.k=this.dataquestion.length
   
      this.dataquestion[this.k]=this.form
      console.log( this.k)
      console.log(this.dataquestion)

    this.test88.push({type:this.form.type,
      question:this.form.question,
      propositon1:this.form.propositon1,
      propositon2:this.form.propositon2,
      propositon3:this.form.propositon3,
      propositon4:this.form.propositon4,
      propositon5:this.form.propositon5  
    })
    console.log("test88 ",this.test88)
    console.log("datascript ",this.datascript)
/*
this.datascript.push({questions:this.test88})
this.userService.addscript(this.datascript).subscribe(
  data => {
    console.log(data);
        window.location.reload();
      },
      err => {
        this.errorMessage = err.error.message;
        
      }
    );
*/
  }
  condition(): void {
    this.boleanaffich=true;
  }/*
  send(): void {
    this.datascript.push({questions:this.test88})
this.userService.addscript(this.datascript).subscribe(
  data => {
    console.log(data);
        window.location.reload();
      },
      err => {
        this.errorMessage = err.error.message;
        
      }
    );
  }
*/
}
