import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-scale',
  templateUrl: './scale.component.html',
  styleUrls: ['./scale.component.css']
})
export class ScaleComponent implements OnInit {
  msg=false;
work=false;
form:any={};
test:any=[];
  errorMessage: any;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  myFunction(): void {
    var namescale = (<HTMLInputElement>document.getElementById("namescale")).value;
    console.log(namescale)
    if(namescale=="")
    {
      this.msg = true;
      this.work =false;
    }
    else{
      this.msg = false;
      this.work=true;
      
      
    }
  }

  onSubmit(): void{
    var namescale =(<HTMLInputElement>document.getElementById("namescale")).value;

    this.test.push({answerScale:namescale,
      answerCode:this.form.answerCode , 
      customerAnswerEng:this.form.customerAnswerEng,
      customerAnswerFr:this.form.customerAnswerFr,
      customerAnswerAr:this.form.customerAnswerAr,
      answerScore:this.form.answerScore,
      answerValidation:this.form.answerValidation})
    console.log(this.test)
  }


  send(): void{
    for(var i=0;i<this.test.length;i++){
      this.userService.addechelle(this.test[i]).subscribe(
        data => {
          console.log(data);

        },
        err => {
          this.errorMessage = err.error.message;

        }
      );

    }

    alert("saved")
    
  }

}
