import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  birthday = new Date(1988, 3, 15);
  constructor() { }

  ngOnInit() {
  }

}
