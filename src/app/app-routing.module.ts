import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './features/public/about/about.component';
import { ServicesComponent } from './features/public/services/services.component';
import { HomeComponent } from './features/public/home/home.component';
import { ContactUsComponent } from './features/public/contact-us/contact-us.component';
import { PortfolioComponent } from './features/public/portfolio/portfolio.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
