import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptsendedComponent } from './scriptsended.component';

describe('ScriptsendedComponent', () => {
  let component: ScriptsendedComponent;
  let fixture: ComponentFixture<ScriptsendedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScriptsendedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScriptsendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
