import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-portafolio',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.scss']
})

export class PortafolioComponent {
  articles = [
    {
      id: 1,
      title: 'Ingeniería de software',
      description: 'Un poco acerca de la ingeniería de software, su importancia y todo lo que puede abarcar!',
      image: 'assets/articulos/ingenieria.png'
    },
    {
      id: 2,
      title: 'Patrones de Diseño',
      description: 'Aprende los patrones de diseño más utilizados en el desarrollo backend con Java.',
      image: 'assets/articulos/patrones.png'
    },
    {
      id: 3,
      title: 'Introducción a DevOps',
      description: 'Un vistazo a las mejores prácticas y herramientas clave en DevOps.',
      image: 'assets/articulos/devOps.png'
    },
    {
      id: 4,
      title: 'Clean Code',
      description: 'Descubre cómo escribir código limpio, legible y mantenible.',
      image: 'assets/articulos/cleanCode.png'
    },
    {
      id: 5,
      title: 'Testing en Java',
      description: 'Buenas prácticas y herramientas para testear tus aplicaciones Java.',
      image: 'assets/articulos/testing.png'
    }
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

    this.maxCarouselIndex = Math.max(this.articles.length - this.carouselItemsPerView, 0);
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
