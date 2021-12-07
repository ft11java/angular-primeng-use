import { TestBed } from '@angular/core/testing';

import { ArticleServiceService } from './article-service.service';

describe('ArticleServiceService', () => {
  let service: ArticleServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
