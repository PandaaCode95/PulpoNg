import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelPutComponent } from './del-put.component';

describe('DelPutComponent', () => {
  let component: DelPutComponent;
  let fixture: ComponentFixture<DelPutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelPutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelPutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
