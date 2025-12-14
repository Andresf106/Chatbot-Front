import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAdministration } from './main-administration';

describe('MainAdministration', () => {
  let component: MainAdministration;
  let fixture: ComponentFixture<MainAdministration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainAdministration]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainAdministration);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
