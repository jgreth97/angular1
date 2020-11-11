import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  
  WorkExperience: string =  "Homeless";
  constructor() { }

  ngOnInit(): void {
  }

}
