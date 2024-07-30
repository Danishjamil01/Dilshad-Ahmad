import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeslistComponent } from './collegeslist.component';

describe('CollegeslistComponent', () => {
  let component: CollegeslistComponent;
  let fixture: ComponentFixture<CollegeslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CollegeslistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CollegeslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
