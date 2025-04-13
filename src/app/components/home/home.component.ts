import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortafolioComponent } from '../portafolio/portafolio.component';
import { FormacionComponent } from '../formacion/formacion.component';
import { ProyectoComponent } from '../proyecto/proyecto.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PortafolioComponent, FormacionComponent, ProyectoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  goToPortfolio(): void {
    window.open('https://drive.google.com/file/d/1pP2w1d-H681EeApcJS2PjsDt4vuLO1wP/view?usp=drive_link', '_blank');
  }

}
