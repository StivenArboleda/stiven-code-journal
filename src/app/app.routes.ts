import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [ 
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'articles/:id',
    loadComponent: () => import('./components/articles/articles.component').then(m => m.ArticlesComponent)
  },
  { path: 'portafolio', component: PortafolioComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } 
];
