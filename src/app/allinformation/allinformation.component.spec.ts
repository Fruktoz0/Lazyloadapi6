import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllinformationComponent } from './allinformation.component';

describe('AllinformationComponent', () => {
  let component: AllinformationComponent;
  let fixture: ComponentFixture<AllinformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllinformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
