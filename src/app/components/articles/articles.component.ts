import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http'; // Asegúrate de importar HttpClientModule

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule, HttpClientModule ], // Agrega HttpClientModule a los imports
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  articleId: number = 0;
  article: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  loadArticle(id: number) {
    this.http.get<any[]>('assets/data/articles.json').subscribe(data => {
      this.article = data.find(a => a.id === id);
    });
  }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.loadArticle(id);
    });
  }

  goBack() {
    window.history.back();
  }
}