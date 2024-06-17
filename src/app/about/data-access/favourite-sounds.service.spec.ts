import { TestBed } from '@angular/core/testing';

import { FavouriteSoundsService } from './favourite-sounds.service';

describe('FavouriteSoundsService', () => {
  let service: FavouriteSoundsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavouriteSoundsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
