import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMessegeComponent } from './new-messege.component';

describe('NewMessegeComponent', () => {
  let component: NewMessegeComponent;
  let fixture: ComponentFixture<NewMessegeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMessegeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMessegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
