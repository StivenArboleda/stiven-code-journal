import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortafolioComponent } from '../portafolio/portafolio.component';
import { FormacionComponent } from '../formacion/formacion.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PortafolioComponent, FormacionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  goToPortfolio(): void {
    window.open('https://stiven-arboleda.vercel.app/', '_blank');
  }

}
