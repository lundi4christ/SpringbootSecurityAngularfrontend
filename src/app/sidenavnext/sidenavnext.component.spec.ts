import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavnextComponent } from './sidenavnext.component';

describe('SidenavnextComponent', () => {
  let component: SidenavnextComponent;
  let fixture: ComponentFixture<SidenavnextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavnextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavnextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
