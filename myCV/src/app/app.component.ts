import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-cv';
  Name: string = "Jackson Grether";
  Address: string =  "4860 Avondale Ridge Drive";
  Phone: string = " 614-849-2716";
  Email: string = "Jackgrether@gmail.com";
  displayEducation: boolean = true;
}