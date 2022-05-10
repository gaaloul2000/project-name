
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-addquestion',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.css']
})
export class AddquestionComponent implements OnInit {
  test = false;
  test1 = false;
  test2 = false;
  test3 = false;
  test4 = false;
  test5 = false;
  datascript = [];
  datascript3: any = [];
  test88: any = [];
  msg = true;
  form: any = {};
  formtype: any = {};
  errorMessage: any;
  blocs: any = [];
  scripts: any = [];
  idscript: any ;
  conditionfrancais: boolean;
  conditionenglais: boolean;
  datascript2: any;
  langue: any;
  test1arabe = false;
  test2arabe = false;
  test3arabe = false;
  test4arabe = false;
  test5arabe = false;
  testarabe = false;
  test1anglais = false;
  test2anglais = false;
  test3anglais = false;
  test4anglais = false;
  test5anglais = false;
  testanglais = false;
  liaison: number;
  kk: number;
  scales: any;
  bb: any=[];
  scaleaa: any;

  allscale:any;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    

    this.datascript = JSON.parse(sessionStorage.getItem("datascript"));

    this.datascript3 = JSON.parse(sessionStorage.getItem("datascript3"));
    console.log(this.datascript3)
    this.datascript2 = JSON.parse(sessionStorage.getItem("datascript2"));

    this.langue = this.datascript2[0].langue;
    this.findscript();
this.findscale();
this.scalenom();
  }



  findscript(): void {
    this.userService.findscript().subscribe(data => {
      this.idscript = data;



    })
  }

  scalenom():void{
    this.userService.getscale().subscribe(data => {
      this.scales = data;



      console.log('scales',this.scales)
      




    })
  }


  findscale(): void {
    this.userService.getallscale().subscribe(data => {
      this.allscale = data;



    })
  }
  addscale(): void {
    this.router.navigate(['scale'])
  }


  myFunction(): void {
    /*var k = (<HTMLInputElement>document.getElementById("tentacles")).value;
*/

    if ((<HTMLInputElement>document.getElementById("type")).value == null) {
      this.msg = true;
      this.test = false;
      this.test1 = false;
      this.test2 = false;
      this.test3 = false;
      this.test4 = false;
      this.test5 = false;
    }

    if (this.langue == "conditionarabe" || this.langue == "conditionenglais" || this.langue == "conditionfrancais") {
      if (/*Number(k) == 1 &&*/ ((<HTMLInputElement>document.getElementById("type")).value == "checkbox" || (<HTMLInputElement>document.getElementById("type")).value == "radio")) {
        this.msg = false;

        this.test = true;
        this.test1 = true;
        this.test2 = false;
        this.test3 = false;
        this.test4 = false;
        this.test5 = false;
      }
      if (/*Number(k) == 2 &&*/ ((<HTMLInputElement>document.getElementById("type")).value == "checkbox" || (<HTMLInputElement>document.getElementById("type")).value == "radio")) {
        this.msg = false;
        this.test = true;
        this.test1 = true;
        this.test2 = true;
        this.test3 = false;
        this.test4 = false;
        this.test5 = false;
      }
      if (/*Number(k) == 3 &&*/ ((<HTMLInputElement>document.getElementById("type")).value == "checkbox" || (<HTMLInputElement>document.getElementById("type")).value == "radio")) {
        this.msg = false;
        this.test = true;
        this.test1 = true;
        this.test2 = true;
        this.test3 = true;
        this.test4 = false;
        this.test5 = false;

      }
      if (/*Number(k) == 4 && */((<HTMLInputElement>document.getElementById("type")).value == "checkbox" || (<HTMLInputElement>document.getElementById("type")).value == "radio")) {
        this.msg = false;
        this.test = true;
        this.test1 = true;
        this.test2 = true;
        this.test3 = true;
        this.test4 = true;
        this.test5 = false;
      }

      if (/*Number(k) == 5 && */((<HTMLInputElement>document.getElementById("type")).value == "checkbox" || (<HTMLInputElement>document.getElementById("type")).value == "radio")) {
        this.msg = false;
        this.test = true;
        this.test1 = true;
        this.test2 = true;
        this.test3 = true;
        this.test4 = true;
        this.test5 = true;
      }

      if (/*((Number(k) == 1) || (Number(k) == 2) || (Number(k) == 3) || (Number(k) == 4) || (Number(k) == 4)) && */((<HTMLInputElement>document.getElementById("type")).value == "text")) {
        this.msg = false;
        this.test = true;
        this.test1 = false;
        this.test2 = false;
        this.test3 = false;
        this.test4 = false;
        this.test5 = false;
      }
    }



    if (this.langue == "conditionfrancaisanglais") {
      if (/*Number(k) == 1 && */((<HTMLInputElement>document.getElementById("type")).value == "checkbox" || (<HTMLInputElement>document.getElementById("type")).value == "radio")) {
        this.msg = false;

        this.test = true;
        this.test1 = true;
        this.test2 = false;
        this.test3 = false;
        this.test4 = false;
        this.test5 = false;


        this.testanglais = true;
        this.test1anglais = true;
        this.test2anglais = false;
        this.test3anglais = false;
        this.test4anglais = false;
        this.test5anglais = false;

      }
      if (/*Number(k) == 2 && */((<HTMLInputElement>document.getElementById("type")).value == "checkbox" || (<HTMLInputElement>document.getElementById("type")).value == "radio")) {
        this.msg = false;
        this.test = true;
        this.test1 = true;
        this.test2 = true;
        this.test3 = false;
        this.test4 = false;
        this.test5 = false;

        this.testanglais = true;
        this.test1anglais = true;
        this.test2anglais = true;
        this.test3anglais = false;
        this.test4anglais = false;
        this.test5anglais = false;
      }
      if (/*Number(k) == 3 && */((<HTMLInputElement>document.getElementById("type")).value == "checkbox" || (<HTMLInputElement>document.getElementById("type")).value == "radio")) {
        this.msg = false;
        this.test = true;
        this.test1 = true;
        this.test2 = true;
        this.test3 = true;
        this.test4 = false;
        this.test5 = false;



        this.testanglais = true;
        this.test1anglais = true;
        this.test2anglais = true;
        this.test3anglais = true;
        this.test4anglais = false;
        this.test5anglais = false;

      }
      if (/*Number(k) == 4 &&*/ ((<HTMLInputElement>document.getElementById("type")).value == "checkbox" || (<HTMLInputElement>document.getElementById("type")).value == "radio")) {
        this.msg = false;
        this.test = true;
        this.test1 = true;
        this.test2 = true;
        this.test3 = true;
        this.test4 = true;
        this.test5 = false;



        this.testanglais = true;
        this.test1anglais = true;
        this.test2anglais = true;
        this.test3anglais = true;
        this.test4anglais = true;
        this.test5anglais = false;
      }

      if (/*Number(k) == 5 &&*/ ((<HTMLInputElement>document.getElementById("type")).value == "checkbox" || (<HTMLInputElement>document.getElementById("type")).value == "radio")) {
        this.msg = false;
        this.test = true;
        this.test1 = true;
        this.test2 = true;
        this.test3 = true;
        this.test4 = true;
        this.test5 = true;

        this.testanglais = true;
        this.test1anglais = true;
        this.test2anglais = true;
        this.test3anglais = true;
        this.test4anglais = true;
        this.test5anglais = true;
      }

      if (/*((Number(k) == 1) || (Number(k) == 2) || (Number(k) == 3) || (Number(k) == 4) || (Number(k) == 4)) && */((<HTMLInputElement>document.getElementById("type")).value == "text")) {
        this.msg = false;
        this.test = true;
        this.test1 = false;
        this.test2 = false;
        this.test3 = false;
        this.test4 = false;
        this.test5 = false;



        this.testanglais = true;
        this.test1anglais = false;
        this.test2anglais = false;
        this.test3anglais = false;
        this.test4anglais = false;
        this.test5anglais = false;
      }
    }

    if (this.langue == "conditionarabanglais") {
      if (/*Number(k) == 1 &&*/ ((<HTMLInputElement>document.getElementById("type")).value == "checkbox" || (<HTMLInputElement>document.getElementById("type")).value == "radio")) {
        this.msg = false;


        this.testarabe = true;
        this.test1arabe = true;
        this.test2arabe = false;
        this.test3arabe = false;
        this.test4arabe = false;
        this.test5arabe = false;


        this.testanglais = true;
        this.test1anglais = true;
        this.test2anglais = false;
        this.test3anglais = false;
        this.test4anglais = false;
        this.test5anglais = false;

      }
      if (/*Number(k) == 2 &&*/ ((<HTMLInputElement>document.getElementById("type")).value == "checkbox" || (<HTMLInputElement>document.getElementById("type")).value == "radio")) {


        this.msg = false;
        this.testarabe = true;
        this.test1arabe = true;
        this.test2arabe = true;
        this.test3arabe = false;
        this.test4arabe = false;
        this.test5arabe = false;

        this.testanglais = true;
        this.test1anglais = true;
        this.test2anglais = true;
        this.test3anglais = false;
        this.test4anglais = false;
        this.test5anglais = false;
      }
      if (/*Number(k) == 3 &&*/ ((<HTMLInputElement>document.getElementById("type")).value == "checkbox" || (<HTMLInputElement>document.getElementById("type")).value == "radio")) {
        this.msg = false;



        this.testarabe = true;
        this.test1arabe = true;
        this.test2arabe = true;
        this.test3arabe = true;
        this.test4arabe = false;
        this.test5arabe = false;





        this.testanglais = true;
        this.test1anglais = true;
        this.test2anglais = true;
        this.test3anglais = true;
        this.test4anglais = false;
        this.test5anglais = false;

      }
      if (/*Number(k) == 4 &&*/ ((<HTMLInputElement>document.getElementById("type")).value == "checkbox" || (<HTMLInputElement>document.getElementById("type")).value == "radio")) {
        this.msg = false;






        this.testarabe = true;
        this.test1arabe = true;
        this.test2arabe = true;
        this.test3arabe = true;
        this.test4arabe = true;
        this.test5arabe = false;

        this.testanglais = true;
        this.test1anglais = true;
        this.test2anglais = true;
        this.test3anglais = true;
        this.test4anglais = true;
        this.test5anglais = false;
      }

      if (/*Number(k) == 5 &&*/ ((<HTMLInputElement>document.getElementById("type")).value == "checkbox" || (<HTMLInputElement>document.getElementById("type")).value == "radio")) {
        this.msg = false;

        this.testarabe = true;
        this.test1arabe = true;
        this.test2arabe = true;
        this.test3arabe = true;
        this.test4arabe = true;
        this.test5arabe = true;





        this.testanglais = true;
        this.test1anglais = true;
        this.test2anglais = true;
        this.test3anglais = true;
        this.test4anglais = true;
        this.test5anglais = true;
      }

      if (/*((Number(k) == 1) || (Number(k) == 2) || (Number(k) == 3) || (Number(k) == 4) || (Number(k) == 4)) &&*/ ((<HTMLInputElement>document.getElementById("type")).value == "text")) {
        this.msg = false;
        this.testarabe = true;
        this.test1arabe = false;
        this.test2arabe = false;
        this.test3arabe = false;
        this.test4arabe = false;
        this.test5arabe = false;

        this.testanglais = true;
        this.test1anglais = false;
        this.test2anglais = false;
        this.test3anglais = false;
        this.test4anglais = false;
        this.test5anglais = false;
      }
    }

    if (this.langue == "conditionarabefrancais") {
      if (/*Number(k) == 1 &&*/ ((<HTMLInputElement>document.getElementById("type")).value == "checkbox" || (<HTMLInputElement>document.getElementById("type")).value == "radio")) {
        this.msg = false;

        this.test = true;
        this.test1 = true;
        this.test2 = false;
        this.test3 = false;
        this.test4 = false;
        this.test5 = false;


        this.testarabe = true;
        this.test1arabe = true;
        this.test2arabe = false;
        this.test3arabe = false;
        this.test4arabe = false;
        this.test5arabe = false;

      }
      if (/*Number(k) == 2 &&*/ ((<HTMLInputElement>document.getElementById("type")).value == "checkbox" || (<HTMLInputElement>document.getElementById("type")).value == "radio")) {
        this.msg = false;
        this.test = true;
        this.test1 = true;
        this.test2 = true;
        this.test3 = false;
        this.test4 = false;
        this.test5 = false;

        this.testarabe = true;
        this.test1arabe = true;
        this.test2arabe = true;
        this.test3arabe = false;
        this.test4arabe = false;
        this.test5arabe = false;
      }
      if (/*Number(k) == 3 &&*/ ((<HTMLInputElement>document.getElementById("type")).value == "checkbox" || (<HTMLInputElement>document.getElementById("type")).value == "radio")) {
        this.msg = false;
        this.test = true;
        this.test1 = true;
        this.test2 = true;
        this.test3 = true;
        this.test4 = false;
        this.test5 = false;



        this.testarabe = true;
        this.test1arabe = true;
        this.test2arabe = true;
        this.test3arabe = true;
        this.test4arabe = false;
        this.test5arabe = false;

      }
      if (/*Number(k) == 4 &&*/ ((<HTMLInputElement>document.getElementById("type")).value == "checkbox" || (<HTMLInputElement>document.getElementById("type")).value == "radio")) {
        this.msg = false;
        this.test = true;
        this.test1 = true;
        this.test2 = true;
        this.test3 = true;
        this.test4 = true;
        this.test5 = false;



        this.testarabe = true;
        this.test1arabe = true;
        this.test2arabe = true;
        this.test3arabe = true;
        this.test4arabe = true;
        this.test5arabe = false;
      }

      if (/*Number(k) == 5 &&*/ ((<HTMLInputElement>document.getElementById("type")).value == "checkbox" || (<HTMLInputElement>document.getElementById("type")).value == "radio")) {
        this.msg = false;
        this.test = true;
        this.test1 = true;
        this.test2 = true;
        this.test3 = true;
        this.test4 = true;
        this.test5 = true;

        this.testarabe = true;
        this.test1arabe = true;
        this.test2arabe = true;
        this.test3arabe = true;
        this.test4arabe = true;
        this.test5arabe = true;
      }

      if (/*((Number(k) == 1) || (Number(k) == 2) || (Number(k) == 3) || (Number(k) == 4) || (Number(k) == 4)) && */((<HTMLInputElement>document.getElementById("type")).value == "text")) {
        this.msg = false;
        this.test = true;
        this.test1 = false;
        this.test2 = false;
        this.test3 = false;
        this.test4 = false;
        this.test5 = false;



        this.testarabe = true;
        this.test1arabe = false;
        this.test2arabe = false;
        this.test3arabe = false;
        this.test4arabe = false;
        this.test5arabe = false;
      }
    }


    if (this.langue == "conditionarabanglaisfrancais") {
      if (/*Number(k) == 1 &&*/ ((<HTMLInputElement>document.getElementById("type")).value == "checkbox" || (<HTMLInputElement>document.getElementById("type")).value == "radio")) {
        this.msg = false;

        this.test = true;
        this.test1 = true;
        this.test2 = false;
        this.test3 = false;
        this.test4 = false;
        this.test5 = false;

        this.testanglais = true;
        this.test1anglais = true;
        this.test2anglais = false;
        this.test3anglais = false;
        this.test4anglais = false;
        this.test5anglais = false;


        this.testarabe = true;
        this.test1arabe = true;
        this.test2arabe = false;
        this.test3arabe = false;
        this.test4arabe = false;
        this.test5arabe = false;

      }
      if (/*Number(k) == 2 &&*/ ((<HTMLInputElement>document.getElementById("type")).value == "checkbox" || (<HTMLInputElement>document.getElementById("type")).value == "radio")) {
        this.msg = false;
        
        this.test = true;
        this.test1 = true;
        this.test2 = true;
        this.test3 = false;
        this.test4 = false;
        this.test5 = false;


        this.testanglais = true;
        this.test1anglais = true;
        this.test2anglais = true;
        this.test3anglais = false;
        this.test4anglais = false;
        this.test5anglais = false;
        
        
        this.testarabe = true;
        this.test1arabe = true;
        this.test2arabe = true;
        this.test3arabe = false;
        this.test4arabe = false;
        this.test5arabe = false;
      }
      if (/*Number(k) == 3 &&*/ ((<HTMLInputElement>document.getElementById("type")).value == "checkbox" || (<HTMLInputElement>document.getElementById("type")).value == "radio")) {
        this.msg = false;
        
        
        this.test = true;
        this.test1 = true;
        this.test2 = true;
        this.test3 = true;
        this.test4 = false;
        this.test5 = false;



        this.testanglais = true;
        this.test1anglais = true;
        this.test2anglais = true;
        this.test3anglais = true;
        this.test4anglais = false;
        this.test5anglais = false;
        
        this.testarabe = true;
        this.test1arabe = true;
        this.test2arabe = true;
        this.test3arabe = true;
        this.test4arabe = false;
        this.test5arabe = false;

      }
      if (/*Number(k) == 4 && */((<HTMLInputElement>document.getElementById("type")).value == "checkbox" || (<HTMLInputElement>document.getElementById("type")).value == "radio")) {
        this.msg = false;
        
        this.test = true;
        this.test1 = true;
        this.test2 = true;
        this.test3 = true;
        this.test4 = true;
        this.test5 = false;

        this.testanglais = true;
        this.test1anglais = true;
        this.test2anglais = true;
        this.test3anglais = true;
        this.test4anglais = true;
        this.test5anglais = false;
        

        this.testarabe = true;
        this.test1arabe = true;
        this.test2arabe = true;
        this.test3arabe = true;
        this.test4arabe = true;
        this.test5arabe = false;
      }

      if (/*Number(k) == 5 && */((<HTMLInputElement>document.getElementById("type")).value == "checkbox" || (<HTMLInputElement>document.getElementById("type")).value == "radio")) {
        this.msg = false;
        this.test = true;
        this.test1 = true;
        this.test2 = true;
        this.test3 = true;
        this.test4 = true;
        this.test5 = true;


        this.testanglais = true;
        this.test1anglais = true;
        this.test2anglais = true;
        this.test3anglais = true;
        this.test4anglais = true;
        this.test5anglais = true;

        this.testarabe = true;
        this.test1arabe = true;
        this.test2arabe = true;
        this.test3arabe = true;
        this.test4arabe = true;
        this.test5arabe = true;
      }

      if (/*((Number(k) == 1) || (Number(k) == 2) || (Number(k) == 3) || (Number(k) == 4) || (Number(k) == 4)) &&*/ ((<HTMLInputElement>document.getElementById("type")).value == "text")) {
        this.msg = false;
       
        this.test = true;
        this.test1 = false;
        this.test2 = false;
        this.test3 = false;
        this.test4 = false;
        this.test5 = false;


        this.testanglais = true;
        this.test1anglais = false;
        this.test2anglais = false;
        this.test3anglais = false;
        this.test4anglais = false;
        this.test5anglais = false;

        this.testarabe = true;
        this.test1arabe = false;
        this.test2arabe = false;
        this.test3arabe = false;
        this.test4arabe = false;
        this.test5arabe = false;
      }
    }




   



  }






  onSubmit(): void {




    /*
   
       this.test88.push({
         type: this.form.type,
         question: this.form.question,
         propositon1: this.form.propositon1,
         propositon2: this.form.propositon2,
         propositon3: this.form.propositon3,
         propositon4: this.form.propositon4,
         propositon5: this.form.propositon5
       })
      */


    /*
    
    if(this.idscript==0) {
      this.liaison=1; 
    }
    
      else {
        this.liaison=this.idscript[this.idscript.length - 1].id + 1;
      }
*/



    if (this.langue == "conditionarabefrancais") {


      this.datascript3[this.datascript3.length - 1].blocfrancais.questions.push({
        type: this.form.type,
        ordre:this.form.ordre,
        questionCategory:this.form.questionCategory,
        textFr: this.form.question,
         langue:"anglais",
answerScale: this.formtype.type
      })


      this.datascript3[this.datascript3.length - 1].blocarabe.questions.push({
        type: this.form.type,
        ordre:this.form.ordre,
        langue:"arabe",
        questionCategory:this.form.questionCategory,
        textAr: this.form.questionarabe,
answerScale: this.formtype.type
      })
    }
    if (this.langue == "conditionfrancaisanglais") {


      this.datascript3[this.datascript3.length - 1].blocfrancais.questions.push({
        type: this.form.type,
        ordre:this.form.ordre,
        questionCategory:this.form.questionCategory,
        textFr: this.form.question,
        langue:"français",
answerScale: this.formtype.type
      })


      this.datascript3[this.datascript3.length - 1].blocanglais.questions.push({
        type: this.form.type,
        ordre:this.form.ordre,
        questionCategory:this.form.questionCategory,
        textEng: this.form.questionanglais,
        langue:"anglais",
answerScale: this.formtype.type
      })
    }
    if (this.langue == "conditionarabanglais") {


      this.datascript3[this.datascript3.length - 1].blocarabe.questions.push({
        type: this.form.type,
        ordre:this.form.ordre,
        questionCategory:this.form.questionCategory,
        textAr: this.form.questionarabe,
        langue:"arabe",
answerScale: this.formtype.type
      })


      this.datascript3[this.datascript3.length - 1].blocanglais.questions.push({
        type: this.form.type,
        ordre:this.form.ordre,
        langue:"anglais",
        questionCategory:this.form.questionCategory,
        textEng: this.form.questionanglais,
answerScale: this.formtype.type
      })
    }

    if (this.langue == "conditionarabe") {
      this.form.langue = "arabe"

      this.datascript3[this.datascript3.length - 1].blocarabe.questions.push({
        

langue:"arabe",
        type: this.form.type,
        ordre:this.form.ordre,
        questionCategory:this.form.questionCategory,
        textAr: this.form.question,
answerScale: this.formtype.type
      })
    }
    if (this.langue == "conditionenglais") {
      this.form.langue = "anglais";
      this.datascript3[this.datascript3.length - 1].blocanglais.questions.push({
        type: this.form.type,
        ordre:this.form.ordre,
        questionCategory:this.form.questionCategory,
        textEng: this.form.question,
        langue:"anglais",
        answerScale: this.formtype.type
      })
    }

    if (this.langue == "conditionfrancais") {
      
      this.form.langue = "francais"
      this.datascript3[this.datascript3.length - 1].blocfrancais.questions.push({
        type: this.form.type,
        langue:"français",
        ordre:this.form.ordre,
        questionCategory:this.form.questionCategory,
        textFr: this.form.question,
        /*
        propositon1: this.form.propositon1,
        propositon2: this.form.propositon2,
        propositon3: this.form.propositon3,
        propositon4: this.form.propositon4,
*/
answerScale: this.formtype.type
      })

    }



    if (this.langue =="conditionarabanglaisfrancais") {


      this.datascript3[this.datascript3.length - 1].blocarabe.questions.push({
        type: this.form.type,
        langue:"arabe",
        ordre:this.form.ordre,
        questionCategory:this.form.questionCategory,
        textAr: this.form.questionarabe,
answerScale: this.formtype.type
      })


      this.datascript3[this.datascript3.length - 1].blocanglais.questions.push({
        type: this.form.type,
        langue:"anglais",
        ordre:this.form.ordre,
        questionCategory:this.form.questionCategory,
        textEng: this.form.questionanglais,
answerScale: this.formtype.type
      })

      this.datascript3[this.datascript3.length - 1].blocfrancais.questions.push({
        type: this.form.type,
        langue:"français",
        ordre:this.form.ordre,
        questionCategory:this.form.questionCategory,
        textFr: this.form.question,
answerScale: this.formtype.type
      })
    }

    /*
    console.log("question", this.test88)
    console.log("datascript", this.datascript);


    
    this.datascript[0].questions.push(this.test88)
    console.log("datascript ",this.datascript[0].scriptName)

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

  addbloc(): void {
    sessionStorage.setItem('datascript3', JSON.stringify(this.datascript3));

    this.router.navigate(['bloc'])
  }




  send(): void {
    /*
        this.datascript[this.datascript.length-1].bloc.questions.push(this.test88)*/

    console.log("datascript", this.datascript);
    console.log("datascript3", this.datascript3);
    sessionStorage.setItem('datascript', JSON.stringify(this.datascript));

    /*
    this.userService.addscript(this.datascript, this.test88).subscribe(
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
  sendajout(): void {
    var kk: number;

    if (this.langue == "conditionarabanglaisfrancais") {
      this.userService.addscripts(this.datascript[0]).subscribe(
        data => {

          kk = data;
          for (var i = 0; i < this.datascript3.length; i++) {
            this.datascript3[i].blocarabe.liaison = kk;
            this.datascript3[i].blocfrancais.liaison = kk;
            this.datascript3[i].blocanglais.liaison = kk;

           

            this.userService.addblocs(this.datascript3[i].blocarabe).subscribe(
              data => {
                console.log(data);

              },
              err => {
                this.errorMessage = err.error.message;

              }
            );

            this.userService.addblocs(this.datascript3[i].blocfrancais).subscribe(
              data => {
                console.log(data);

              },
              err => {
                this.errorMessage = err.error.message;

              }
            );
            this.userService.addblocs(this.datascript3[i].blocanglais).subscribe(
              data => {
                console.log(data);

              },
              err => {
                this.errorMessage = err.error.message;

              }
            );

          }

        },

        err => {
          this.errorMessage = err.error.message;

        }
      );
    }
    if (this.langue == "conditionarabanglais") {
      this.userService.addscripts(this.datascript[0]).subscribe(
        data => {

          kk = data;
          for (var i = 0; i < this.datascript3.length; i++) {
            this.datascript3[i].blocarabe.liaison = kk;

            this.datascript3[i].blocanglais.liaison = kk;

            console.log(this.datascript3[i].blocarabe.questions)

            this.userService.addblocs(this.datascript3[i].blocarabe).subscribe(
              data => {
                console.log(data);

              },
              err => {
                this.errorMessage = err.error.message;

              }
            );
            this.userService.addblocs(this.datascript3[i].blocanglais).subscribe(
              data => {
                console.log(data);

              },
              err => {
                this.errorMessage = err.error.message;

              }
            );

          }

        },

        err => {
          this.errorMessage = err.error.message;

        }
      );
    }
    if (this.langue == "conditionarabefrancais") {
      this.userService.addscripts(this.datascript[0]).subscribe(
        data => {

          kk = data;
          for (var i = 0; i < this.datascript3.length; i++) {
            this.datascript3[i].blocarabe.liaison = kk;

            this.datascript3[i].blocfrancais.liaison = kk;

            console.log(this.datascript3[i].blocarabe.questions)

            this.userService.addblocs(this.datascript3[i].blocarabe).subscribe(
              data => {
                console.log(data);

              },
              err => {
                this.errorMessage = err.error.message;

              }
            );
            this.userService.addblocs(this.datascript3[i].blocfrancais).subscribe(
              data => {
                console.log(data);

              },
              err => {
                this.errorMessage = err.error.message;

              }
            );

          }

        },

        err => {
          this.errorMessage = err.error.message;

        }
      );
    }
    if (this.langue == "conditionfrancaisanglais") {
      this.userService.addscripts(this.datascript[0]).subscribe(
        data => {

          kk = data;
          for (var i = 0; i < this.datascript3.length; i++) {
            this.datascript3[i].blocanglais.liaison = kk;

            this.datascript3[i].blocfrancais.liaison = kk;


            this.userService.addblocs(this.datascript3[i].blocanglais).subscribe(
              data => {
                console.log(data);

              },
              err => {
                this.errorMessage = err.error.message;

              }
            );
            this.userService.addblocs(this.datascript3[i].blocfrancais).subscribe(
              data => {
                console.log(data);

              },
              err => {
                this.errorMessage = err.error.message;

              }
            );

          }

        },

        err => {
          this.errorMessage = err.error.message;

        }
      );
    }
    if (this.langue == "conditionfrancais") {
      this.userService.addscripts(this.datascript[0]).subscribe(
        data => {

          kk = data;
          for (var i = 0; i < this.datascript3.length; i++) {


            this.datascript3[i].blocfrancais.liaison = kk;
          
          
          console.log( "test",this.datascript3[i].blocfrancais.questions)

            this.userService.addblocs(this.datascript3[i].blocfrancais).subscribe(
              data => {
                console.log(data);

              },
              err => {
                this.errorMessage = err.error.message;

              }
            );

          }

        },

        err => {
          this.errorMessage = err.error.message;

        }
      );
    }
    if (this.langue == "conditionarabe") {
      this.userService.addscripts(this.datascript[0]).subscribe(
        data => {

          kk = data;
          for (var i = 0; i < this.datascript3.length; i++) {
            this.datascript3[i].blocarabe.liaison = kk;





            this.userService.addblocs(this.datascript3[i].blocarabe).subscribe(
              data => {
                console.log(data);

              },
              err => {
                this.errorMessage = err.error.message;

              }
            );


          }

        },

        err => {
          this.errorMessage = err.error.message;

        }
      );
    }
    if (this.langue == "conditionenglais") {
      this.userService.addscripts(this.datascript[0]).subscribe(
        data => {

          kk = data;
          for (var i = 0; i < this.datascript3.length; i++) {
            this.datascript3[i].blocanglais.liaison = kk;





            this.userService.addblocs(this.datascript3[i].blocanglais).subscribe(
              data => {
                console.log(data);

              },
              err => {
                this.errorMessage = err.error.message;

              }
            );


          }

        },

        err => {
          this.errorMessage = err.error.message;

        }
      );
    }


  


    /*if (this.langue == "conditionarabefrancais" && kk!=0) {
      
     /* for (var i = 0; i < this.datascript3.length; i++) {
        console.log(i, this.datascript3[i].blocfrancais)
        console.log(i, this.datascript3[i].blocarabe)
        
                this.userService.addblocs(this.datascript3[i].blocarabe , kk).subscribe(
                  data => {
                    console.log(data);
            
                  },
                  err => {
                    this.errorMessage = err.error.message;
            
                  }
                );
                 this.userService.addblocs(this.datascript3[i].blocfrancais , kk).subscribe(
                   data => {
                     console.log(data);
             
                   },
                   err => {
                     this.errorMessage = err.error.message;
             
                   }
                 );

      }*/
    /*}*/



















  }



  sendaffich(): void {

    this.datascript[this.datascript.length - 1].bloc.questions.push(this.test88)
   

    
      console.log("datascript", this.datascript);
      console.log("datascript ", this.datascript[1])
      sessionStorage.setItem('datascript', JSON.stringify(this.datascript));

      /*
      this.userService.addscript(this.datascript, this.test88).subscribe(
        data => {
          console.log(data);
window.location.reload();
        },
        err => {
          this.errorMessage = err.error.message;

        }
      );*/
    }


  

}
