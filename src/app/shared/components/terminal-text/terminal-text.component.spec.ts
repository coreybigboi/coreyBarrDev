import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalTextComponent } from './terminal-text.component';

describe('TerminalTextComponent', () => {
  let component: TerminalTextComponent;
  let fixture: ComponentFixture<TerminalTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TerminalTextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TerminalTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
