import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { AboutComponent } from './features/public/about/about.component';
import { ServicesComponent } from './features/public/services/services.component';
import { HomeComponent } from './features/public/home/home.component';
import { PortfolioComponent } from './features/public/portfolio/portfolio.component';
import { ContactUsComponent } from './features/public/contact-us/contact-us.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './core/components/footer/footer.component';
import { UnsplashService } from './features/public/service/unsplash.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    ServicesComponent,
    HomeComponent,
    PortfolioComponent,
    ContactUsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
