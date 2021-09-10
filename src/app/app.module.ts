import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {EtesterdbService} from './services/etesterdb.service';
import { HttpClientModule } from '@angular/common/http';
import { TestviewComponent } from './components/testview/testview.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TestviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [EtesterdbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
