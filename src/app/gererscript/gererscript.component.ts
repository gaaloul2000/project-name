import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-gererscript',
  templateUrl: './gererscript.component.html',
  styleUrls: ['./gererscript.component.css']
})
export class GererscriptComponent implements OnInit {
  scripts : any;
  enquetes: any;
  constructor(private userService: UserService ,private router:Router ) {
  }
  ngOnInit(): void {
    this.findallscript();
    this.findallenquete()
  }

  findallscript():void{
    this.userService.getAllscripts().subscribe(data =>{
      this.scripts=data;
     
      console.log(this.scripts);
          
      
     
  
    })
  
  }

  findallenquete():void{
    this.userService.findall().subscribe(data =>{
      this.enquetes=data;
     
      console.log(this.enquetes);
          
      
     
  
    })
  
  }

  deletescript(id: number ){
    this.userService.deleteScript(id).subscribe(data =>{
  console.log(data);
  window.location.reload();
    })
  
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

}
