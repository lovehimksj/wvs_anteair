import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantBoardingComponent } from './merchant-boarding.component';

describe('MerchantBoardingComponent', () => {
  let component: MerchantBoardingComponent;
  let fixture: ComponentFixture<MerchantBoardingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantBoardingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantBoardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
