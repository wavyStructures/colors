import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section4WaterBlackComponent } from './section-4-water-black.component';

describe('Section4WaterBlackComponent', () => {
  let component: Section4WaterBlackComponent;
  let fixture: ComponentFixture<Section4WaterBlackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Section4WaterBlackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Section4WaterBlackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
