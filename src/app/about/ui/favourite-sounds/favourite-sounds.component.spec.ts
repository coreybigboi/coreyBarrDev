import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteSoundsComponent } from './favourite-sounds.component';

describe('FavouriteSoundsComponent', () => {
  let component: FavouriteSoundsComponent;
  let fixture: ComponentFixture<FavouriteSoundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavouriteSoundsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FavouriteSoundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
