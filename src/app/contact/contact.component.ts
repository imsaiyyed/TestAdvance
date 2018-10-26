import { Component, OnInit } from '@angular/core';
import {NgModule} from '@angular/core';

@Component({
  selector: 'app-contact',
  
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  companyName:String="Dark Script";
  marketCapital:number=60;
  stockPrice:Number=2000;
  anyDigit:Number=4;
  constructor() { }

  ngOnInit() {
  }

}
