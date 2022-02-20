import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkilsComponent } from './skils/skils.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FooterComponent } from './footer/footer.component';
import { PortfoliitemComponent } from './portfoliitem/portfoliitem.component';
import { SkilitemComponent } from './skilitem/skilitem.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SkilsComponent,
    PortfolioComponent,
    FooterComponent,
    PortfoliitemComponent,
    SkilitemComponent,
   
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
