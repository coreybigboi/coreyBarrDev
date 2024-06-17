import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeycapComponent } from './keycap.component';

describe('KeycapComponent', () => {
  let component: KeycapComponent;
  let fixture: ComponentFixture<KeycapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeycapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KeycapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
