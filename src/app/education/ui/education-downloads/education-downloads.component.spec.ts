import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationDownloadsComponent } from './education-downloads.component';

describe('EducationDownloadsComponent', () => {
  let component: EducationDownloadsComponent;
  let fixture: ComponentFixture<EducationDownloadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationDownloadsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EducationDownloadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
