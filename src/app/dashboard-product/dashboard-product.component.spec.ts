import {
  TestBed,
  inject,
  async,
  ComponentFixture,
} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { XHRBackend, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { CovalentCoreModule, TdMediaService } from '@covalent/core';
import { CovalentHttpModule } from '@covalent/http';

import { DashboardProductComponent } from './dashboard-product.component';

describe('Component: DashboardProduct', () => {

  let noop: () => void = () => {
    // noop method
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CovalentCoreModule.forRoot(),
        CovalentHttpModule.forRoot(),
        RouterTestingModule,
      ],
      declarations: [
        DashboardProductComponent,
      ],
      providers: [
        MockBackend,
        { provide: XHRBackend, useExisting: MockBackend },
        { provide: APP_BASE_HREF, useValue: '/' },
        { provide: TdMediaService, useValue: {
            registerQuery: noop,
            query: noop,
            broadcast: noop,
            createComponent: noop,
            createReplaceComponent: noop,
            createOverlayComponent: noop,
            register: noop,
            resolve: noop,
          },
        },
      ],
    })
    .compileComponents();
  }));

  it('should create the component', (done) => {
    let fixture: ComponentFixture<any> = TestBed.createComponent(DashboardProductComponent);
    let testComponent: DashboardProductComponent = fixture.debugElement.componentInstance;
    let element: HTMLElement = fixture.nativeElement;

    testComponent.ngAfterViewInit();
    fixture.detectChanges();
    expect(element.querySelector('td-layout-manage-list')).toBeTruthy();
    fixture.whenStable().then(() => {
      expect(element.querySelector('a[ng-reflect-router-link="/product"]')).toBeTruthy();
      expect(element.querySelector('a[ng-reflect-router-link="stats"]')).toBeTruthy();
      expect(element.querySelector('a[ng-reflect-router-link="features"]')).toBeTruthy();
      done();
    });
  });
});
