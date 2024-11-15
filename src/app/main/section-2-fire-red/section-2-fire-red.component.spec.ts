import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section2FireRedComponent } from './section-2-fire-red.component';

describe('Section2FireRedComponent', () => {
  let component: Section2FireRedComponent;
  let fixture: ComponentFixture<Section2FireRedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Section2FireRedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Section2FireRedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
