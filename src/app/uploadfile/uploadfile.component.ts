import { HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-uploadfile',
  templateUrl: './uploadfile.component.html',
  styleUrls: ['./uploadfile.component.css']
})
export class UploadfileComponent implements OnInit {
  enq:any;
  fileName:string;
  targuets: any;
  selectedFiles: FileList;
  progressInfos = [];
  message = '';
  fileInfos: Observable<any>;
  data: any;
  csvtarguet:any;
  constructor(private userService: UserService ) { }

  ngOnInit(): void {
    
  }
  /*onClick() {  
    const fileUpload = this.fileUpload.nativeElement;fileUpload.onchange = () => {  
    for (let index = 0; index < fileUpload.files.length; index++)  
    {  
     const file = fileUpload.files[index];  
      this.fileName = file.name +" is uploaded"
     
     this.files.push({ data: file, inProgress: false, progress: 0});  
    }  
      this.uploadFiles();  
    };  
    fileUpload.click();  
}
private uploadFiles() {  
  this.fileUpload.nativeElement.value = '';  
  this.files.forEach(file => {  
    this.uploadFile(file);  
  });  
}
uploadFile(file) {  
  const formData = new FormData();  
  formData.append('file', file.data);  
  file.inProgress = true;  
  this.userService.upload(formData).subscribe(
    rsp => {
      console.log(rsp.type)
     
},
    error => {
      console.log(error)
    });
}
*/


selectFiles(event) {
  this.progressInfos = [];
  this.selectedFiles = event.target.files;
}


uploadFiles() {
  this.message = '';

  for (let i = 0; i < this.csvtarguet.length; i++) {

   /* this.upload(i, this.selectedFiles[i]);*/
  /* this.csvtarguet[i].targetId.enquete=3; */
  console.log(this.csvtarguet[i]);
  console.log(this.csvtarguet.length);
  console.log(this.enq);
  this.csvtarguet[i].targetId.enquete=this.enq;
  this.addtarguet(this.csvtarguet[i]);
    
  }
}
affich(gg){
  this.enq=sessionStorage.getItem("enq");
  ''
  this.message = '';
  for (let i = 0; i < this.selectedFiles.length; i++) {

  this.userService.getcsvtarguett(this.selectedFiles[i]).subscribe(data =>{
    this.csvtarguet=data;
    for(let j=0;j<this.csvtarguet.length;j++)
    this.csvtarguet[j].targetId.enquete=this.enq;
    console.log("aaa",this.csvtarguet);
   console.log(this.csvtarguet[1].targetId.enquete);
    console.log(i);
  })
  }

}


addtarguet(targuet): void {
  
  this.userService.addTarguet(targuet).subscribe(
    data => {
  console.log(data)



      
    },
  
  );
  
}
 

/*
upload(idx, file) {
  this.progressInfos[idx] = { value: 0, fileName: file.name };
  this.userService.upload(file).subscribe(
    event => {
    
      if (event.type == HttpEventType.UploadProgress) {
        this.progressInfos[idx].value = Math.round(100 * event.loaded / event.total);
      } /*else if (event instanceof HttpResponse) {
        this.fileInfos = this.userService.getcsvtarguett();
      }
      */
     /*
    },
    err => {
      this.progressInfos[idx].value = 0;
      this.message = 'Could not upload the file:' + file.name;
    });
}
*/
}