import { Directive, ElementRef } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Directive({
  selector: '[appCustomDir]'
})
export class CustomDirDirective {
dataApi:string;
jsonObj:MyObj;
  constructor(Element: ElementRef,private http: HttpClient) {
    console.log(""+this.http.get('https://api.github.com/users/seeschweiler'));
    this.http.get('https://api.github.com/users/seeschweiler').forEach(item=>{
        this.dataApi="Id:"+item['id'];
        this.dataApi=this.dataApi+"\nAvatar Url:"+item['avatar_url'];
        this.dataApi=this.dataApi+"\nlogin:"+item['login'];
        this.dataApi=this.dataApi+"\nLocation:"+item['location'];
        this.dataApi=this.dataApi+"\nFollowers:"+item['followers'];
        Element.nativeElement.innerText=""+this.dataApi;

      });
 
 }

}
interface MyObj {
  login: string;
  id: number;
  avatar_url:string;

}