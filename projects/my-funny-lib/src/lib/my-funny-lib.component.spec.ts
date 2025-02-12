import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFunnyLibComponent } from './my-funny-lib.component';

describe('MyFunnyLibComponent', () => {
  let component: MyFunnyLibComponent;
  let fixture: ComponentFixture<MyFunnyLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyFunnyLibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyFunnyLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
