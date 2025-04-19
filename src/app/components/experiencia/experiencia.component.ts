import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-experiencia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experiencia.component.html',
  styleUrl: './experiencia.component.scss'
})

export class ExperienciaComponent {
  experiencias = [
    {
      cargo: 'Auxiliar de Infraestructura',
      empresa: 'Orca IT S.A.S',
      periodo: 'Mar 2021 - Feb 2022',
      descripcion: 'Responsable del mantenimiento de servidores en la nube, gestión de respaldos, instalación de soluciones antivirus, reporte de incidentes y elaboración de informes técnicos.'
    },
    {
      cargo: 'Líder de Seguridad Informática',
      empresa: 'Orca IT S.A.S',
      periodo: 'Mar 2022 - Jun 2023',
      descripcion: 'Gestión de la seguridad en servidores y clústeres. Administración de firewalls, implementación de herramientas de vigilancia, escaneo de puertos y servicios internos, y aplicación de parches de seguridad a sistemas operativos y servicios.'
    },
    {
      cargo: 'Desarrollador Java Cloud',
      empresa: 'VC@Soft',
      periodo: 'Jun 2023 - Ene 2024',
      descripcion: 'Practicante universitario enfocado en el desarrollo backend con Java y el framework Quarkus. Documentación de servicios mediante Swagger OpenAPI, refactorización de sistemas legacy y creación de nuevas funcionalidades en el backend usando bases de datos MongoDB y PostgreSQL.'
    },
    {
      cargo: 'Ingeniero de Aplicaciones',
      empresa: 'Carvajal Tecnología y Servicios',
      periodo: 'Mar 2024 - Oct 2024',
      descripcion: 'Integración de sistemas mediante Oracle Integration Cloud (OIC) y desarrollo de APIs orientadas a la migración y modernización de plataformas existentes.'
    },
    {
      cargo: 'Analista de Desarrollo',
      empresa: 'Tu Compra Payment',
      periodo: 'Oct 2024 - Actualidad',
      descripcion: 'Desarrollo Backend: Implementación de historias de usuario con Java, Spring Boot y Redis. Desarrollo Frontend: Creación de interfaces con Angular y PrimeNG. Resolución de incidentes: Análisis y solución de errores en desarrollos existentes y bases de datos PostgreSQL.'
    }
    

  ];

}

