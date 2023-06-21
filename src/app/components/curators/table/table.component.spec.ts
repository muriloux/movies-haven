import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuratorsTableComponent } from './table.component';

describe('ListComponent', () => {
  let component: CuratorsTableComponent;
  let fixture: ComponentFixture<CuratorsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CuratorsTableComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CuratorsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
