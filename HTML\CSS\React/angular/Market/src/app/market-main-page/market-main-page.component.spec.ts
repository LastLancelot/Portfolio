import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketMainPageComponent } from './market-main-page.component';

describe('MarketMainPageComponent', () => {
  let component: MarketMainPageComponent;
  let fixture: ComponentFixture<MarketMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketMainPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
