import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffertEditComponent } from './offert-edit.component';

describe('OffertEditComponent', () => {
  let component: OffertEditComponent;
  let fixture: ComponentFixture<OffertEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffertEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffertEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
