import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetStageComponent } from './get-stage.component';

describe('GetStageComponent', () => {
  let component: GetStageComponent;
  let fixture: ComponentFixture<GetStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetStageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
