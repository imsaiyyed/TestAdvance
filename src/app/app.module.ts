import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Square } from './square.pipe';
import { Multiplier } from './Multiplier.pipe';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { CustomDirDirective } from './custom-dir.directive';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    Square,
    Multiplier,
    NotFoundComponent,
    HomeComponent,
    CustomDirDirective
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
