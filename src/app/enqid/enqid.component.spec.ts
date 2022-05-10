import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnqidComponent } from './enqid.component';

describe('EnqidComponent', () => {
  let component: EnqidComponent;
  let fixture: ComponentFixture<EnqidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnqidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnqidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
