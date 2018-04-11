import 'rxjs/add/observable/from';
import 'rxjs/add/operator/concatAll';

import * as _ from "lodash";

import Big from 'big.js';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { WebWorkerService } from 'angular2-web-worker';

@Injectable()
export class FactorialService {

  constructor(private _webWorkerService: WebWorkerService) {
  }




  public computeFactorials(firstFactorial: number, numberOfFactorials: number): Observable<number> {
    let promises: Promise<number>[] = [];
    for (let i = firstFactorial; i < firstFactorial + numberOfFactorials; i++) {
      const p: Promise<number> = this._webWorkerService.run(this.fact, i);
      promises.push(p);
    }

    return Observable.from(promises.map(function (promise) {
      return Observable.from(promise);
    })).concatAll();
  }

  public fact(x) {
    try {
      if (x == 0) {
        return 1;
      }
      if (x < 0) {
        return undefined;
      }
      for (var i = x; --i;) {
        x *= i;
      }
      return x;
    } catch (e) {
      console.log("e ", e);
    }
  }
}

