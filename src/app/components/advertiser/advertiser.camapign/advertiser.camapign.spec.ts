import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertiserCampaignComponent } from './advertiser.camapign';

describe('AdvertiserCampaignComponent', () => {
  let component: AdvertiserCampaignComponent;
  let fixture: ComponentFixture<AdvertiserCampaignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertiserCampaignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertiserCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
