import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GererscriptComponent } from './gererscript.component';

describe('GererscriptComponent', () => {
  let component: GererscriptComponent;
  let fixture: ComponentFixture<GererscriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GererscriptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GererscriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
