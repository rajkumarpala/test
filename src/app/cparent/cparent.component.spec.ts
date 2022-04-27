import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CparentComponent } from './cparent.component';

describe('CparentComponent', () => {
  let component: CparentComponent;
  let fixture: ComponentFixture<CparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CparentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
