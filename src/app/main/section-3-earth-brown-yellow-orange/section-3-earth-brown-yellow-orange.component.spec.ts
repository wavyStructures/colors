import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section3EarthBrownYellowOrangeComponent } from './section-3-earth-brown-yellow-orange.component';

describe('Section3EarthBrownYellowOrangeComponent', () => {
  let component: Section3EarthBrownYellowOrangeComponent;
  let fixture: ComponentFixture<Section3EarthBrownYellowOrangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Section3EarthBrownYellowOrangeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Section3EarthBrownYellowOrangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
