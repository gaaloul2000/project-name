import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistermoderateurComponent } from './registermoderateur.component';

describe('RegistermoderateurComponent', () => {
  let component: RegistermoderateurComponent;
  let fixture: ComponentFixture<RegistermoderateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistermoderateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistermoderateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
