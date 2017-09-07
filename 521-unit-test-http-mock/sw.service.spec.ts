import { Http, HttpModule, BaseRequestOptions, Response, Headers } from '@angular/http';

import { TestBed, async as asynctest, inject } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { SwService } from './sw.service';

describe('Sw Service with real HTTP', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SwService],
      imports: [HttpModule]
    });
  });

  it('returns the right number of entries', asynctest(inject([SwService], (service: SwService) => {
    expect(service).toBeTruthy();
    service.getList().subscribe(r => {
      expect(r.length).toBe(100);
    });
  })));
});

// ------------------------------------------------------------

// testData here does not even have the right shape!
const testData = [
  {
    'name': 'USR',
    'phone': '101-010-0001',
    'address': '3 Laws St',
    'partner': true,
    'bold': false,
    'classy': true,
    'id': 1,
    'netWorth': 1023400,
    'numStocks': 15640
  },
  {
    'name': 'Umbrella Corp.',
    'phone': '999-999-9999',
    'address': '9 Street',
    'partner': false,
    'bold': true,
    'classy': true,
    'id': 2,
    'netWorth': 123332,
    'numStocks': 22331
  }
];

describe('Sw Service with mock HTTP', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: Http,
          useFactory: (backend: MockBackend, options: BaseRequestOptions) => {
            backend.connections.subscribe((c: MockConnection) => {
              c.mockRespond(new Response({
                body: testData,
                status: 200,
                headers: new Headers({}),
                url: '/whatever',
                merge: undefined
              }));
            });
            return new Http(backend, options);
          },
          deps: [MockBackend, BaseRequestOptions]
        },
        MockBackend,
        BaseRequestOptions,
        SwService
      ]
    });
  });

  it('returns the data from the backend', inject([SwService], (service: SwService) => {
    expect(service).toBeTruthy();
    service.getList().subscribe(r => {
      expect(r).toBe(testData);
    });
  }));
});
