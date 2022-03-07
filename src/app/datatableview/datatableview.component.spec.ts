import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatableviewComponent } from './datatableview.component';

describe('DatatableviewComponent', () => {
  let component: DatatableviewComponent;
  let fixture: ComponentFixture<DatatableviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatatableviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatableviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
