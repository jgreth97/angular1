import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  
Grades: string[]=[
"A",
"B",
"C",
"D"
  ]
  

  Education: string[] =  [
    "University of Kentucky",
     "Dublin Coffmean Highschool"
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
