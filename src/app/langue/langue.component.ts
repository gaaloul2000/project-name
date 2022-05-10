import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-langue',
  templateUrl: './langue.component.html',
  styleUrls: ['./langue.component.css']
})
export class LangueComponent implements OnInit {
  datascript2: any=  [];
  datascript: any=  [];
  datascript3: any=  [];
  alert: string;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  langue():void{
    this.datascript = JSON.parse(sessionStorage.getItem("datascript"));
    console.log(this.datascript)
    
  
  this.datascript2=[];
    var anglais = (<HTMLInputElement>document.getElementById("anglais")).checked;
    
    var francais = (<HTMLInputElement>document.getElementById("francais")).checked;
   
    var arabe = (<HTMLInputElement>document.getElementById("arabe")).checked;
    
    
    var conditionenglais= false;
    var    conditionarabe= false;
    var conditionarabefrancais= false;
    var conditionfrancais= false;
    var conditionarabanglais = false;
    var conditionfrancaisanglais = false;
    var conditionarabanglaisfrancais= false;

    var questionarabe=[]
    var questionfrancais=[]
    var questionanglais=[]
    if(francais==true&&arabe==false&& anglais==false){
     conditionfrancais=true;
     this.datascript2.push({langue:"conditionfrancais"})
     
    }

    if(anglais==true&&francais==false&&arabe==false ){
      conditionenglais=true;
    
      this.datascript2.push({langue:"conditionenglais"})      
    }



    if(arabe==true&&francais==false&&anglais==false){
     conditionarabe=true;
     this.datascript2.push({langue:"conditionarabe"})
    
    }


    if(arabe==true&&francais==true&&anglais==false){
      
     conditionarabefrancais=true;

     this.datascript2.push({langue:"conditionarabefrancais"})
    }

    if(arabe==false&&francais==true&&anglais==true){
      
      conditionfrancaisanglais=true;

      this.datascript2.push({langue:"conditionfrancaisanglais"})

    }

    if(arabe==true&&francais==false&&anglais==true){
     conditionarabanglais=true;
     this.datascript2.push({langue:"conditionarabanglais"})


    }
    if(arabe==true&&francais==true&&anglais==true){
      conditionarabanglaisfrancais=true;
      this.datascript2.push({langue:"conditionarabanglaisfrancais"})


    }
    sessionStorage.setItem('datascript2',JSON.stringify(this.datascript2));
    sessionStorage.setItem('datascript3',JSON.stringify(this.datascript3));
    console.log(this.datascript2)

    if(arabe==false&&francais==false&&anglais==false){
      this.alert="il faut choisir la langue"
    }
    else
    this.router.navigateByUrl('/bloc');
    
  }

}
