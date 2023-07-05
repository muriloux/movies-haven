import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'movies-haven';

  constructor(private metaTagService: Meta) {}

  ngOnInit() {
    this.metaTagService.addTags([
      {
        name: 'keywords',
        content:
          'movies, haven, movies haven, unbiased, non-political, non-woke, not woke, ideology-free',
      },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Murilo Melo' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'date',
        content: '2023',
        scheme: 'YYYY',
      },
      { charset: 'UTF-8' },
    ]);
  }
}
