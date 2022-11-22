import {Component, OnInit} from '@angular/core';
import {Article} from '../article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article: Article = {};
  articles: Article[] = [
    {
      title: 'Hải Thiểu Năng',
      url: 'https://www.facebook.com/Haikeo26'
    },
    {
      title: 'Chou Chou',
      url: 'https://www.facebook.com/ptmc2903.9240'
    },
    {
      title: 'Hải Thiểu Năng',
      url: 'https://www.facebook.com/Haikeo26'
    },
    {
      title: 'Hải Thiểu Năng',
      url: 'https://www.facebook.com/Haikeo26'
    },
    {
      title: 'Hải Thiểu Năng',
      url: 'https://www.facebook.com/Haikeo26'
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  addNewArticle() {
    this.articles.push(this.article);
  }
}
