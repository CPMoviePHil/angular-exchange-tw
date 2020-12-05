import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowExchangeTwComponent } from './show-exchange-tw.component';

describe('ShowExchangeTwComponent', () => {
  let component: ShowExchangeTwComponent;
  let fixture: ComponentFixture<ShowExchangeTwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowExchangeTwComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowExchangeTwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
