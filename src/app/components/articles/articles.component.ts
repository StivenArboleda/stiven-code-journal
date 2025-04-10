import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-articles',
  standalone: true,
    imports: [CommonModule],
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  articleId: number = 0;
  article: any;

  articles = [
    {
      id: 1,
      title: 'Introducción a la Ingeniería de Software',
      date: '2025',
      image: 'assets/images/intro-ingenieria.jpg',
      content: 'Contenido muy completo y extenso de ejemplo con Lorem Ipsum...'
    },
    {
      id: 2,
      title: 'Patrones de Diseño',
      date: '15 de Marzo 2025',
      image: 'Articulos/patrones.png',
      icono: 'Articulos/iconos/megafono.png',
      contentUno: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      contentDos: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      fragmentContent: 'Este fragmento ofrece un análisis visual profundo sobre cómo los patrones de diseño se implementan en proyectos reales. Desde el Singleton hasta el Strategy, cada uno cumple una función estratégica para optimizar la estructura del software.',
      columnas: [
        { title: 'Comportamentales', content: 'Permite que los desarrolladores usen estructuras existentes para resolver nuevos problemas.' },
        { title: 'Creacionales', content: 'Ayuda a que el software sea más fácil de entender, modificar y ampliar.' },
        { title: 'Estructurales', content: 'Facilita la evolución de una aplicación sin comprometer su arquitectura.' }
      ]
      
    },
    // ...otros artículos
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.articleId = +params['id'];
      this.article = this.articles.find(a => a.id === this.articleId);
    });
  }

  goBack() {
    window.history.back();
  }
  
}
