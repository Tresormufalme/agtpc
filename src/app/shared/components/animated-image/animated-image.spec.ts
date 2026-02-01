import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedImage } from './animated-image';

describe('AnimatedImage', () => {
  let component: AnimatedImage;
  let fixture: ComponentFixture<AnimatedImage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimatedImage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimatedImage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
