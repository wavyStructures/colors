import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section5MetalWhiteMetallicsComponent } from './section-5-metal-white-metallics.component';

describe('Section5MetalWhiteMetallicsComponent', () => {
  let component: Section5MetalWhiteMetallicsComponent;
  let fixture: ComponentFixture<Section5MetalWhiteMetallicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Section5MetalWhiteMetallicsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Section5MetalWhiteMetallicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
