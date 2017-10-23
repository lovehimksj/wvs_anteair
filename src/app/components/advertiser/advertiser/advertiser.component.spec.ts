import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertiserComponent } from './advertiser.component';

describe('AdvertiserCamapign', () => {
  let component: AdvertiserComponent;
  let fixture: ComponentFixture<AdvertiserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertiserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertiserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
