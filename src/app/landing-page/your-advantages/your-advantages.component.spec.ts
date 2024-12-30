import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourAdvantagesComponent } from './your-advantages.component';

describe('YourAdvantagesComponent', () => {
  let component: YourAdvantagesComponent;
  let fixture: ComponentFixture<YourAdvantagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YourAdvantagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourAdvantagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
