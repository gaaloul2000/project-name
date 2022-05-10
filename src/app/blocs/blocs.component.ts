import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../_services/user.service';
@Component({
  selector: 'app-blocs',
  templateUrl: './blocs.component.html',
  styleUrls: ['./blocs.component.css']
})
export class BlocsComponent implements OnInit {
  form: any = {};
  blocsaffich : any;
  errorMessage: any;
  idscript: any;
  constructor(private userService: UserService ,private router:Router ,private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.getAllblocs() ;
    this.idscript= this.route.snapshot.params['idscript'];
  }
  ajouterQuestion(idblocs ){
    this.router.navigate(['questions', this.idscript,idblocs ]);
    
    }

  getAllblocs():void {
    this.userService.getAllblocs().subscribe(data=>{
      this.blocsaffich=data;
      
      console.log(this.blocsaffich)
   
    })
  
  }

  onSubmit(): void {
    
    /*
    this.userService.addblocs(this.form).subscribe(
      data => {
    console.log(data);
        window.location.reload();
      },
      err => {
        this.errorMessage = err.error.message;
        
      }
    );*/
  }


  deleteScript( ){
    this.userService.deleteScript(this.idscript).subscribe(data =>{
  console.log(data);
  this.router.navigateByUrl('/user')
    })
  
  }
  
  annuler( ){
    console.log(this.blocsaffich[3].questions) 
    if(this.blocsaffich[this.idscript].questions==null){
      this.userService.deleteScript(this.idscript).subscribe(data =>{
        console.log(data);
        this.router.navigateByUrl('/user')
          })
    }
    
  
  }

}
