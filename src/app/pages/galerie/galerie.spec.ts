import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Galerie } from './galerie';

describe('Galerie', () => {
  let component: Galerie;
  let fixture: ComponentFixture<Galerie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Galerie]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Galerie);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
