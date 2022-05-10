import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';

import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css'],
  providers: [DatePipe]
})
export class BoardUserComponent implements OnInit {
/* app login logout*/
private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  showsignUp = false;
  username: string;
  currentUser: any;
  date: String;
/*  toufa lena app login logout*/
kk :number;
cc :number;
  enquetes : any;
  scripts : any;
  nombreenquete: any;
  content: string;
  errorMessage = '';
  form: any = {};
  formemail: any = {};
  bollean:boolean;
  clients2: { id: number; email: string; }[];
  scriptid:any;
  currentDateTime:any;
  list: any ;
  idbloc: any;
  ddd: number;
  nombrescript: any;
  scriptsencours:any =[];
  j:number;
  scriptprochainaffecte: any;
  scriptencoursaffecte:any;
  alltarguets:any =[];
  ee: any;
  idenq: string;
  
  constructor(private userService: UserService ,private datepipe: DatePipe,private token: TokenStorageService,private router:Router ,private tokenStorageService: TokenStorageService) {
    
   }

  ngOnInit(): void { 
    
    /*tabda lena app login logout */
    this.currentUser = this.token.getUser();
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  

  
/*toufa lena app login logout */
    this.findall();
    this.findallscript();
    this.findscriptsprochainaffecte();
    this.findscriptsencoursaffecte();
    this.userService.getalltarguets().subscribe(data =>{
      this.alltarguets=data;

    })
    
    /*this.userService.getUserBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
    */
  }

  
  findall():void{
  this.userService.findall().subscribe(data =>{
    this.enquetes=data;
console.log(this.enquetes.length+1);
console.log(this.enquetes);

this.nombreenquete=this.enquetes.length;
  
  })

}

 
findallscript():void{
  this.userService.getAllscripts().subscribe(data =>{
    this.scripts=data;
    this.nombrescript=this.scripts.length;
    console.log(this.scripts);
        
    
    let currentDateTime =this.datepipe.transform((new Date),'yyyy-MM-dd');

this.date=currentDateTime;

  })

}


findscriptsprochainaffecte():void{
  this.userService.findscriptsprochainaffecte().subscribe(data =>{
    this.scriptprochainaffecte=data;
    console.log("scriptprochain",this.scriptprochainaffecte);

  })

}
findscriptsencoursaffecte():void{
  this.userService.findscriptsencoursaffecte().subscribe(data =>{
    this.scriptencoursaffecte=data;
    console.log("scriptencour",this.scriptencoursaffecte);

  })
}


goto(id: number ){
  this.router.navigate(['blocs', id ]);
  }
  /*
  gotoupdate(id: number ){
    this.router.navigate(['footer', id ]);
    }*/

    getid(scriptId){
      this.ddd=scriptId;
      console.log(this.ddd);
    }

  onSubmit(): void {
    console.log(this.ddd);

    this.form.scriptId=this.ddd;
    this.userService.addenquete(this.form).subscribe(
      data => {
    console.log(data);
    console.log(this.form);
    window.location.reload();


        
      },
      err => {
        this.errorMessage = err.error.message;

      }
    );
    
  }

  onSubmitscript(): void {
    console.log(this.form)
    
    this.userService.addscript(this.form).subscribe(
      data => {
        var k=data.length;
        var bb=data[k-1].id;
        this.idbloc=data[k-1].id;
        console.log("1"+this.idbloc);
        this.router.navigateByUrl('/blocs/'+this.idbloc);
    console.log(data);
    window.location.reload();

    
        
      },
      err => {
        this.errorMessage = err.error.message;
        
      }
    );
    
  }


  deleteEnquete(id: number ){
    this.userService.deleteEnquete(id).subscribe(data =>{
  console.log(data);
  window.location.reload();
    })
  
  }



  arretenquete(id: number ){
    this.userService.arretenquete(id).subscribe(data =>{
  console.log(data);
  window.location.reload();
    })
  
  }




  arretenquete2(id: number ){
    this.userService.arretenquete(id).subscribe(data =>{
  console.log(data);
  window.location.reload();
    })
  
  }
/*tabda lena app login logout */
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
  /*toufa lena app login logout */
 
  bbb(kk): void { 
   
this.kk=kk;
console.log(kk);
 

  }

  

  onSubmitemail(): void {
    
    console.log(this.kk);
    /*this.userService.getalltarguets().subscribe(data =>{
      this.alltarguets=data;
      console.log(this.alltarguets);

    })
*/
    /*this.clients2=[
      {
        "id": 1,
        "email": "trabelsirayen02@gmail.com"
      
      },
     
      {
         
        "id": 2,
        "email": "galolazizaziz@gmail.com"
        
      }
    ]*/

    console.log(this.alltarguets);
    
    for (var i = 0; i < this.alltarguets.length; i++) {
      
      this.formemail.emailAddress=this.alltarguets[i].targetId.email;
      
      this.formemail.msg="http://localhost:4200/enquete/"+this.kk+"/"+this.alltarguets[i].targetId.email/*+"/"+this.clients2[i].id*/;
      this.userService.sendscript (this.formemail).subscribe(
        data => {
      console.log(data);
          
        },
        err => {
          this.errorMessage = err.error.message;
          
        }
      );
    }
    console.log(this.formemail.msg);
    console.log(this.formemail.emailAddress);
   
     window.location.reload();  
  
    
  }


test():void{
  this.router.navigateByUrl('/script');
}

nextpage(idenq){
  console.log(idenq);

    sessionStorage.setItem('enq',idenq);
    this.router.navigateByUrl('/uploadfile');
  }
  
}
