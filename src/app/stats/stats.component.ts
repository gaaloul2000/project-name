import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto'
import { UserService } from '../_services/user.service';


@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  very: number;
  Extremely: number;
  fairly: number;
  Notatall: any;
  Notvery: any;
  satisfaction:any= [];
  scal:any= [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.satisfaction1();
    this.scale();
    


  /*  this.tt();*/





  }




  satisfaction1():void {
    this.userService.satisfaction1().subscribe(data=>{
      this.satisfaction=data;
     
      
      this.tt2(); 
      
   
    })
  
  }
 

  scale():void {
    this.userService.satisfaction2().subscribe(data=>{
      this.scal=data;
     
      
      this.tt2scale(); 
      
   
    })
  
  }
 
  

 

  



/*
  tt(){const canvas = <HTMLCanvasElement> document.getElementById('myChart');

 
  const ctx = canvas.getContext('2d');
const myChart = new Chart(ctx, {
 type: 'pie',
  data: {
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Red',
        'Yellow',
        'Blue'
    ]
}
 
      
});

} */


tt(){const canvas = <HTMLCanvasElement> document.getElementById('myChart2');
const ctx = canvas.getContext('2d');
const myChart = new Chart(ctx, {
type: 'bar',
data: {
  labels: [
    'Extremely',
    'Very',
    'Fairly',
    'Notvery',
    'Notatall'
],
    datasets: [{
        label: '# of satisfactions',
        data:[this.satisfaction[0],this.satisfaction[1],this.satisfaction[2], this.satisfaction[3],this.satisfaction[4]],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
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

}

tt2(){const canvas = <HTMLCanvasElement> document.getElementById('myChart');
this.tt();
  
const ctx = canvas.getContext('2d');

const myChart = new Chart(ctx, {
type: 'pie',
data: {
  datasets: [{
    label: 'My First Dataset',
    data:[this.satisfaction[0],this.satisfaction[1],this.satisfaction[2], this.satisfaction[3],this.satisfaction[4]],
    backgroundColor: [
      'rgba(255, 99, 132)',
      'rgba(255, 159, 64)',
      'rgba(255, 205, 86)',
      'rgba(75, 192, 192)',
      'rgba(54, 162, 235)',
      'rgba(153, 102, 255)',
      'rgba(201, 203, 207, 0.2)'
    ],
    hoverOffset: 4
  }],

  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: [
    'Extremely',
    'Very',
    'Fairly',
    'Notvery',
    'Notatall'
]
}

    
});


} 


ttscale(){const canvas = <HTMLCanvasElement> document.getElementById('myChart4');
const ctx = canvas.getContext('2d');
const myChart = new Chart(ctx, {
type: 'bar',
data: {
  labels: [
    'Very_easy',
    'Easy',
    'Neutral',
    'Not_easy',
    'Not_easy_at_all'
],
    datasets: [{
        label: '# of satisfactions',
        data:[this.scal[0],this.scal[1],this.scal[2], this.scal[3],this.scal[4]],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
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

}

tt2scale(){const canvas = <HTMLCanvasElement> document.getElementById('myChart3');
this.ttscale();
  
const ctx = canvas.getContext('2d');

const myChart = new Chart(ctx, {
type: 'pie',
data: {
  datasets: [{
    label: 'My First Dataset',
    data:[this.scal[0],this.scal[1],this.scal[2], this.scal[3],this.scal[4]],
    backgroundColor: [
      'rgba(255, 99, 132)',
      'rgba(255, 159, 64)',
      'rgba(255, 205, 86)',
      'rgba(75, 192, 192)',
      'rgba(54, 162, 235)',
      'rgba(153, 102, 255)',
      'rgba(201, 203, 207, 0.2)'
    ],
    hoverOffset: 4
  }],

  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: [
    'Extremely',
    'Very',
    'Fairly',
    'Notvery',
    'Notatall'
]
}

    
});


} 


}


 