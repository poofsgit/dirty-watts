import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptainRecordsComponent } from './captain-records.component';

describe('CaptainRecordsComponent', () => {
  let component: CaptainRecordsComponent;
  let fixture: ComponentFixture<CaptainRecordsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaptainRecordsComponent]
    });
    fixture = TestBed.createComponent(CaptainRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
