import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesCharactersComponent } from './favorites-characters.component';

describe('FavoritesCharactersComponent', () => {
  let component: FavoritesCharactersComponent;
  let fixture: ComponentFixture<FavoritesCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritesCharactersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
