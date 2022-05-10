import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../_services/user.service';
import { Chart,registerables } from 'chart.js';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
  id:number;
  errorMessage = '';
  form: any = {};
  enquete: any = {};
  enquetes : any;
  very: number;
  Extremely: number;
  fairly: number;

  constructor(private route: ActivatedRoute,private userService: UserService) { 
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    
    this.satisfaction1();
    this.satisfaction2();
    this.satisfaction3();
  

this.tt();
  

  }
  satisfaction1():void {
    this.userService.satisfaction1().subscribe(data=>{
      this.Extremely=data;
     
      console.log( this.Extremely)

      
   
    })
  
  }
  satisfaction2():void {
    this.userService.satisfaction2().subscribe(data=>{
      this.very=data;
     console.log( this.very)
    
      
   
    })
  
  }

  satisfaction3():void {
    this.userService.satisfaction3().subscribe(data=>{
      this.fairly=data;
      console.log(this.fairly)
     
    
      
   
    })
  
  }

  /*
  tt(){const canvas = <HTMLCanvasElement> document.getElementById('myChart');
  const ctx = canvas.getContext('2d');
const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
          label: '# of Votes',
          data: [0, 19, 3, 5, 2, 3],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
      }]
  },
  options: {
      scales: {
          y: {
              beginAtZero: true
          }
      }
  }
});

}*/
  

tt(){const canvas = <HTMLCanvasElement> document.getElementById('myChart');
const ctx = canvas.getContext('2d');
const myChart = new Chart(ctx, {

  type: 'line',
  data: {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
    ],
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  },
  options: {}
});

}







}



