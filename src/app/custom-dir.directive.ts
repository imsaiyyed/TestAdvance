import { Directive, ElementRef } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Directive({
  selector: '[appCustomDir]'
})
export class CustomDirDirective {
dataApi:string;
jsonObj:MyObj;
  constructor(Element: ElementRef,private http: HttpClient) {
    // console.log(""+this.http.get('https://api.github.com/users/seeschweiler'));
    // this.http.get('https://api.github.com/users/seeschweiler').forEach(item=>{
    //     this.dataApi="Id:"+item['id'];
    //     this.dataApi=this.dataApi+"\nAvatar Url:"+item['avatar_url'];
    //     this.dataApi=this.dataApi+"\nlogin:"+item['login'];
    //     this.dataApi=this.dataApi+"\nLocation:"+item['location'];
    //     this.dataApi=this.dataApi+"\nFollowers:"+item['followers'];

     // });
      Element.nativeElement.innerHTML="<blockquote class='twitter-tweet'><p lang='en' dir='ltr'>Sunsets don&#39;t get much better than this one over <a href='https://twitter.com/GrandTetonNPS?ref_src=twsrc%5Etfw'>             @GrandTetonNPS</a>.                <a href='https://twitter.com/hashtag/nature?src=hash&amp;ref_src=twsrc%5Etfw'>                    #nature</a> <a href='https://twitter.com/hashtag/sunset?src=hash&amp;ref_src=twsrc%5Etfw'>#sunset</a> <a href='http://t.co/YuKy2rcjyU'>pic.twitter.com/YuKy2rcjyU</a></p>&mdash; US Department of the Interior (@Interior)   <a href='https://twitter.com/Interior/status/463440424141459456?ref_src=twsrc%5Etfw'>May 5, 2014                   </a></blockquote> <script async src='https://platform.twitter.com/widgets.js' charset='utf-8'>                 </script>";
      // "<br><a class='twitter-timeline' href='https://twitter.com/TwitterDev/lists/national-parks?ref_src=twsrc%5Etfw'>A Twitter List by TwitterDev</a> <script async src='https://platform.twitter.com/widgets.js' charset='utf-8'></script>"+
      // "<a class='twitter-timeline' href='https://twitter.com/TwitterDev/timelines/539487832448843776?ref_src=twsrc%5Etfw'>National Park Tweets - Curated tweets by TwitterDev</a> <script async src='https://platform.twitter.com/widgets.js' charset='utf-8'></script>";

 }

}
interface MyObj {
  login: string;
  id: number;
  avatar_url:string;

}