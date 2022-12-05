import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccordionsComponent } from './components/accordions/accordions.component';
import { ButtonComponent } from './components/button/button.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HideMenuComponent } from './components/hide-menu/hide-menu.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { StepsComponent } from './components/steps/steps.component';
import { LastStepComponent } from './components/last-step/last-step.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HideMenuComponent,
    MainLayoutComponent,
    ButtonComponent,
    StepsComponent,
    AccordionsComponent,
    FooterComponent,
    LastStepComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
