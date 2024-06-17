import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColouredBoxComponent } from './coloured-box.component';

describe('ColouredBoxComponent', () => {
  let component: ColouredBoxComponent;
  let fixture: ComponentFixture<ColouredBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColouredBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColouredBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
