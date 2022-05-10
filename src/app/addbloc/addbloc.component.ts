import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addbloc',
  templateUrl: './addbloc.component.html',
  styleUrls: ['./addbloc.component.css']
})
export class AddblocComponent implements OnInit {
  form: any = {};
  form2: any = [];
  test88: any = [];
  datascript2: any;
  datascript3: any = [];
  databloc: any = [];
  langue: any;
  alert: string;
  

  constructor(private router: Router) {

    this.datascript2 = JSON.parse(sessionStorage.getItem("datascript2"));
    this.datascript3 = JSON.parse(sessionStorage.getItem("datascript3"));
   
    this.langue = this.datascript2[0].langue;
  }

  ngOnInit(): void {
  }
  onSubmit(): void {
    

    if (this.langue == "conditionenglais") {
 
      this.datascript3.push({ blocanglais: { name: this.form.namenglais, questions: [],liaison:null ,language:"anglais" } })
     
    }


    if (this.langue == "conditionarabe") {
      console.log( this.datascript3[this.datascript3.length])
      this.datascript3.push({blocarabe:{ name: this.form.namearabe, questions: [],liaison:null ,language:"arabe"}} )


    }

    if (this.langue == "conditionfrancais") {
      this.datascript3.push( {blocfrancais:{ name: this.form.namefrancais, questions: [],liaison:null,language:"français" }} )

    }


    if (this.langue == "conditionarabefrancais") {
      this.datascript3.push({ blocfrancais: { name: this.form.namefrancais, questions: [] ,liaison:null,language:"français" }, blocarabe: { name: this.form.namearabe, questions: [] ,liaison:null,language:"arabe" } })

    }


    if (this.langue == "conditionfrancaisanglais") {
      this.datascript3.push({ blocfrancais: { name: this.form.namefrancais, questions: [],liaison:null,language:"français" }, blocanglais: { name: this.form.nameenglais, questions: [],liaison:null,language:"anglais" } })

    }


    if (this.langue == "conditionarabanglais") {
      this.datascript3.push({ blocarabe: { name: this.form.namearabe, questions: [],liaison:null,language:"arabe" }, blocanglais: { name: this.form.nameenglais, questions: [] ,liaison:null,language:"anglais"} })

    }



    if (this.langue == "conditionarabanglaisfrancais") {
      this.datascript3.push({ blocarabe: { name: this.form.namearabe, questions: [],liaison:null,language:"arabe" }, blocanglais: { name: this.form.nameenglais, questions: [],liaison:null,language:"anglais" },blocfrancais: { name: this.form.namefrancais, questions: [],liaison:null,language:"français" } })

    }

  
    this.databloc.push( this.datascript3)
   
    /*
    this.datascript.push({bloc:{name:this.form.name,questions:this.test88}})
    */
    sessionStorage.setItem('datascript3',JSON.stringify(this.datascript3));
    console.log(this.databloc)
    

    this.router.navigate(['addquestion'])
  }

}
