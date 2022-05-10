import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';
import { QuestionsComponent } from '../questions/questions.component';
import { ThisReceiver } from '@angular/compiler';


@Component({
  selector: 'app-enquete',
  templateUrl: './enquete.component.html',
  styleUrls: ['./enquete.component.css']
})
export class EnqueteComponent implements OnInit {
  k1: boolean;
  form: any = {};
  set1 = [];
  questionaffich: any;
  errorMessage = '';
  scripts: any;
  enquetes: any;
  content: string;
  liaison: number;
  idenquete: number;
  idscript: number;
  j: number;
  form2: any;
  bollean: boolean;
  bollean2: boolean;
  nombrescript: any;
  idclient: String;
  questions: any;
  questions1: any;
  nombrequestion: any;
  blocs: any;
  nombreblocs: any;
  nombrequestions1: any;
  blocs1: any = [];
  k: number;
  allscale: any;
  scales: any;
  form21: any = {};
  form11: any = [];
  tt: any;
  languefr: boolean = false;
  languefr2: string;
  targetget: any = {};
  test: boolean;
  test2: boolean;
  test3: boolean;
  constructor(private userService: UserService, private route: ActivatedRoute) { }




  ngOnInit(): void {
    this.idenquete = this.route.snapshot.params['id'];

    this.idclient = this.route.snapshot.params['idClient'];
    this.getAllblocs();
    this.getQuestion();
    this.getQuestionscale();
    this.getid();
    this.target();


  }


  target(): void {

    this.idclient = this.route.snapshot.params['idClient'];

    this.userService.target().subscribe(data => {
      this.targetget = data;
      console.log(this.targetget[2].language)
      for (var f = 0; f < this.targetget.length; f++) {
        console.log("aaaaaa");
        if (this.targetget[f].language == "français" && this.targetget[f].targetId.email == this.idclient) {
          this.languefr2 = this.targetget[f].language;
          this.languefr = true
          console.log(this.languefr2);
        }

        if (this.targetget[f].language == "anglais" && this.targetget[f].targetId.email == this.idclient) {
          this.languefr2 = this.targetget[f].language;
          this.languefr = true
          console.log(this.languefr2);
        }
        if (this.targetget[f].language == "arabe" && this.targetget[f].targetId.email == this.idclient) {
          this.languefr2 = this.targetget[f].language;
          this.languefr = true
          console.log(this.languefr2);
        }
      }
      if (this.idclient != null) {
        this.userService.bloc(this.idscript, this.languefr2).subscribe(data => {
          this.blocs = data;
          console.log(this.blocs)




        })
      }
      if (this.idclient == null) {
        this.userService.bloc(this.idscript, "arabe").subscribe(data => {
          this.blocs = data;
          console.log(this.blocs)




        })
      }


    })


  }

  getid(): void {
    this.idenquete = this.route.snapshot.params['id'];

    this.userService.idscript(this.idenquete).subscribe(data => {
      this.idscript = data;
      console.log(this.idscript)

    })

  }

  findall(): void {
    this.userService.findall().subscribe(data => {
      this.enquetes = data;
      console.log(this.enquetes)

    })

  }

  /*
console.log(this.enquetes.length+1);
console.log(this.enquetes);
console.log(this.liaison);
 
for (var i = 0; i < this.enquetes.length; i++){
   
  if (this.enquetes[i].id==this.idenquete){
    console.log(this.enquetes[i].id)

  if (this.enquetes[i].status=="active")
  this.bollean=true;
  else
this.bollean=false;
}

} 

  
  })
 
}


*/

  getQuestionscale(): void {
    this.userService.getallscale().subscribe(data => {
      this.allscale = data;



    })
  }


  getQuestion(): void {
    this.userService.getAllQuestion().subscribe(data => {
      this.questions = data;
      console.log(data)


    })


  }
  /*
  for(var i = 0; i < this.nombrequestions1; i++ ){
    console.log(i);
    console.log(this.blocs)
   if(this.questions1[i].liaisonblocs==this.blocs[this.k].idblocs){
     this.blocs1[this.k]=this.blocs[i];
     this.k=this.k+1;
    }
  } 
  console.log(this.blocs1);

  })
  
 
}
*/







  getAllblocs(): void {
    this.idenquete = this.route.snapshot.params['id'];
    this.userService.endedornot(this.idenquete).subscribe(data => {
      this.test = data;
      console.log(data)


    })

    


    this.getid();


  }




  /*getblocs():void{
  
    this.j=0;
  
    console.log(this.j);
      for(var i=0; i<this.nombreblocs; i++){
        if(this.blocs[i].idscript==this.idscript){
        this.blocs1[this.j]=this.blocs[i];
        }
  
      }
      console.log(this.blocs1)
  }
  */

  /*
      
  
  
  */






  test12(): void {
    /*   this.userService.getscale().subscribe(data => {
         this.scales = data;
   
   
   
        
         
   
   
   
   
       })
       var k = []
       var r=[]
       for (var i = 0; i < this.questions.length; i++) {
        
           if (this.questions[i].script.id == this.idscript) {
   
             k.push(220 + this.questions[i].id)
           }
         
       }
   
      
   console.log(this.allscale)
   console.log(this.questions)
   
       for (var w = 0; w < 4; w++) {
   
       }
   
       */

    console.log(this.form21)




    {
      /* if (this.form21 != null) {
         console.log(this.form21)
         const str = this.form21.test;
 
         const words = str.split("+");
         var string = ''
         string = words[0]
         console.log(words[1])
         this.set1.push({ id: words[0], reponse: words[1] })
         console.log(this.set1)
       }*/
    }

  }




  /*
    getAllQuestion():void {
      this.userService.getAllQuestion().subscribe(data=>{
        this.questionaffich=data;
        var t=this.questionaffich[0].propositon1
    console.log( this.questionaffich)
        
     
      })
    
    }
  */
  onSubmit(): void {
    var a = 1;
    if (this.idclient == null) {
      for (var i in this.form21) {
        console.log(this.form21[i])
        var form = {}
        form = { enquete: this.idenquete, email: "anonymos", response: this.form21[i], idques: i, order: a }
        a++
        this.set1.push(form)

      }
      console.log(this.set1)
      for (var w = 0; w < this.set1.length; w++) {


        this.userService.addresponse(this.set1[w]).subscribe(
          data => {
            console.log(data);

          },
          err => {
            this.errorMessage = err.error.message;

          }
        );
      }
    }

    if (this.idclient != null) {
      for (var i in this.form21) {
        console.log(this.form21[i])
        var form = {}
        form = { enquete: this.idenquete, email: this.idclient, response: this.form21[i], idques: i, order: a }
        a++
        this.set1.push(form)

      }
      console.log(this.set1)
      for (var w = 0; w < this.set1.length; w++) {


        this.userService.addresponse(this.set1[w]).subscribe(
          data => {
            console.log(data);

          },
          err => {
            this.errorMessage = err.error.message;

          }
        );
      }
    }
  }

  onClickSubmit(data) {
    alert("Entered Email id : " + this.questions.id);
  }

}