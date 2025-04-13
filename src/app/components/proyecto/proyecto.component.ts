import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.scss']
})
export class ProyectoComponent {
  proyectos = [
    {
      titulo: 'Stiven Code Journal',
      descripcion: 'Mi portafolio web personal, donde se encuentran algunos de mis proyectos más destacados, mis habilidades técnicas, artículos informativo y un poco sobre mi formación.',
      imagen: 'assets/proyectos/cap-portafolio.png',
      demo: 'https://demo1.com',
      repo: 'https://github.com/usuario/tareas'
    },
    {
      titulo: 'David Peletería',
      descripcion: 'La página web profesional de una peletería, se realizó con el acompañamiento del cliente, quien eligió paleta de colores, fuentes y la información de toda la página.',
      imagen: 'assets/proyectos/cap-peleteria.png',
      demo: 'https://david-peleteria.vercel.app/',
      repo: 'https://github.com/StivenArboleda/DavidPeleteria'
    },
    {
      titulo: 'E-commerce',
      descripcion: 'La maquetación de un E-commerce realizado con Angular. Cuenta con página de Inicio, Sobre nosotros, Tienda, Detalle del producto, Preguntas frecuentes, 404 y uso del carrito de compras.',
      imagen: 'assets/proyectos/cap-ecommerce.png',
      demo: 'https://stivenarboledaecommerce.vercel.app/',
      repo: 'https://github.com/StivenArboleda/E-commerce'
    },
  ];

  
  carouselIndex = 0;
  carouselItemsPerView = 3;
  maxCarouselIndex = 0;

  ngOnInit() {
    if (typeof window !== 'undefined') {
      this.updateCarousel();
      window.addEventListener('resize', this.updateCarousel.bind(this));
    }
  }  

  updateCarousel() {
    const width = window.innerWidth;
    if (width < 768) {
      this.carouselItemsPerView = 1;
    } else if (width < 1024) {
      this.carouselItemsPerView = 2;
    } else {
      this.carouselItemsPerView = 3;
    }

    this.maxCarouselIndex = Math.max(this.proyectos.length - this.carouselItemsPerView, 0);
    this.carouselIndex = Math.min(this.carouselIndex, this.maxCarouselIndex);
  }

  nextSlide() {
    if (this.carouselIndex < this.maxCarouselIndex) {
      this.carouselIndex++;
    }
  }

  prevSlide() {
    if (this.carouselIndex > 0) {
      this.carouselIndex--;
    }
  }

  goToSlide(index: number) {
    this.carouselIndex = index;
  }

  getDots(): any[] {
    return Array(this.maxCarouselIndex + 1);
  }
}