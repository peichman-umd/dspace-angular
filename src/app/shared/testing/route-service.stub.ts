import { of as observableOf } from 'rxjs';

export const routeServiceStub: any = {
  /* eslint-disable no-empty,@typescript-eslint/no-empty-function */
  hasQueryParamWithValue: (param: string, value: string) => {
  },
  hasQueryParam: (param: string) => {
  },
  removeQueryParameterValue: (param: string, value: string) => {
  },
  addQueryParameterValue: (param: string, value: string) => {
  },
  getQueryParameterValues: (param: string) => {
    return observableOf({});
  },
  getQueryParamsWithPrefix: (param: string) => {
    return observableOf({});
  },
  getQueryParamMap: () => {
    return observableOf(new Map());
  },
  getQueryParameterValue: () => {
    return observableOf({});
  },
  getRouteParameterValue: (param) => {
    return observableOf('');
  },
  getRouteDataValue: (param) => {
    return observableOf({});
  },
  getHistory: () => {
    return observableOf(['/home', '/collection/123', '/home']);
  },
  getPreviousUrl: () => {
    return observableOf('/home');
  }
  /* eslint-enable no-empty, @typescript-eslint/no-empty-function */
};
