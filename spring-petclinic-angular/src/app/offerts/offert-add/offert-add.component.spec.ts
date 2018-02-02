import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffertAddComponent } from './offert-add.component';

describe('OffertAddComponent', () => {
  let component: OffertAddComponent;
  let fixture: ComponentFixture<OffertAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffertAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffertAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
