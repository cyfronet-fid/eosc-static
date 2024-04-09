import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EoscClosureComponent } from './eosc-closure.component';

describe('EoscClosureComponent', () => {
  let component: EoscClosureComponent;
  let fixture: ComponentFixture<EoscClosureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EoscClosureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EoscClosureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
