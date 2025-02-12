import { TestBed } from '@angular/core/testing';

import { MyFunnyLibService } from './my-funny-lib.service';

describe('MyFunnyLibService', () => {
  let service: MyFunnyLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyFunnyLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
