import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section1WoodGreensBluesComponent } from './section-1-wood-greens-blues.component';

describe('Section1WoodGreensBluesComponent', () => {
  let component: Section1WoodGreensBluesComponent;
  let fixture: ComponentFixture<Section1WoodGreensBluesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Section1WoodGreensBluesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Section1WoodGreensBluesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
