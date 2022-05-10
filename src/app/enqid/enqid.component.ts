import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enqid',
  templateUrl: './enqid.component.html',
  styleUrls: ['./enqid.component.css']
})
export class EnqidComponent implements OnInit {
  idenq:any;
  enq: any;
  alert:any;
  constructor(private router:Router ) { }

  ngOnInit(): void {
  } 
  nextpage(){
    this.idenq=(document.getElementById("enqid") as HTMLInputElement).value
    console.log(this.idenq);
    if(this.idenq == '')
    { 
      this.alert="il faut saisir un entier"

    }
    else
    {
      sessionStorage.setItem('enq',this.idenq);
      this.router.navigateByUrl('/uploadfile');
    }
    
  }
}


