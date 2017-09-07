import { AppComponent } from './app.component';
import { MyRouterModule } from './app.routing';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    MyRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
