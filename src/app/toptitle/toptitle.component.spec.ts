import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToptitleComponent } from './toptitle.component';

describe('ToptitleComponent', () => {
  let component: ToptitleComponent;
  let fixture: ComponentFixture<ToptitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToptitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToptitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
