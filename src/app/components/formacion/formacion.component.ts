import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.scss'],
})
export class FormacionComponent {

  tecnologias = [
    { nombre: 'Docker', logo: 'assets/continua/icon-docker.png', link: 'https://platzi.com/p/stiven2201/curso/8781-docker-fundamentos/diploma/detalle/' },
    { nombre: 'Bash Shell', logo: 'assets/continua/icon-bash.png', link: 'https://platzi.com/p/stiven2201/curso/1468-bash-shell/diploma/detalle/' },
    { nombre: 'DevOps', logo: 'assets/continua/icon-devops.png', link: 'https://platzi.com/p/stiven2201/curso/4558-introduccion-devops/diploma/detalle/' },
    { nombre: 'Pruebas', logo: 'assets/continua/icon-testing.png', link: 'https://platzi.com/p/stiven2201/curso/1421-pruebas-software/diploma/detalle/' },
    { nombre: 'Lambda', logo: 'assets/continua/icon-lambda.png', link: 'https://www.udemy.com/certificate/UC-2c0d03d4-fe2d-40bf-bc4e-c45e6bb915cd/' },
    { nombre: 'Angular 17', logo: 'assets/continua/icon-angular.png', link: 'https://platzi.com/p/stiven2201/curso/8352-course/diploma/detalle/' },
    { nombre: 'MongoDB', logo: 'assets/continua/icon-mongo.png', link: 'https://platzi.com/p/stiven2201/curso/5356-mongodb-modelado/diploma/detalle/' },
    
  ];
  
  abrirCertificado(url: string) {
    window.open(url, '_blank');
  }
  
}
