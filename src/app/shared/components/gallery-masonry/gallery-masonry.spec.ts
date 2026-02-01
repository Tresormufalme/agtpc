import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryMasonry } from './gallery-masonry';

describe('GalleryMasonry', () => {
  let component: GalleryMasonry;
  let fixture: ComponentFixture<GalleryMasonry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryMasonry]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryMasonry);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
