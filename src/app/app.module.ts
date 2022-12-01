import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { StepsComponent } from './components/steps/steps.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainLayoutComponent,
    ButtonComponent,
    StepsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
