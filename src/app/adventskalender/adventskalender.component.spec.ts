import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventskalenderComponent } from './adventskalender.component';

describe('AdventskalenderComponent', () => {
  let component: AdventskalenderComponent;
  let fixture: ComponentFixture<AdventskalenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdventskalenderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdventskalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
