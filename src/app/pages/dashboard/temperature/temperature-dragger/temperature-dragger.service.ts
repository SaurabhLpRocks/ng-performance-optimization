import { Injectable } from '@angular/core';
import { WebWorkerService } from 'angular2-web-worker';

@Injectable()
export class TemperatureDraggerService {
    constructor(private _webWorkerService: WebWorkerService) {

    }

    public getPreviousValueAndValueNumber(value, min, max, step): Promise<[number]> {
        return this._webWorkerService.run((args: any[]) => {
            const value = args[0];
            const min = args[1];
            const max = args[2];
            const step = args[3];

            const previousValue = (value - min) / (max - min);
            const valNumber = Math.round(previousValue * (max - min) / step) * step + min;

            return [previousValue, valNumber];
        }, [value, min, max, step])
    }

    public toValueNumber(factor, min, max, step): Promise<number> {
        return this._webWorkerService.run((args: any[]) => {
            const factor = args[0];
            const min = args[1];
            const max = args[2];
            const step = args[3];
            const val = Math.round(factor * (max - min) / step) * step + min;
            return val;
        }, [factor, min, max, step])
    }

    public getRelativeValue(svgRoot, viewBoxSize, scaleFactor, translateYValue, radius, event, bottomAngleRad): Promise<number> {
        return this._webWorkerService.run((args: any[]) => {
            try {
                const svgRoot = JSON.parse(args[0]);
 console.log("svgRoot ", JSON.parse(args[0]));
                const viewBoxSize = args[1];
                const scaleFactor = args[2];
                const translateYValue = args[3];
                const radius = args[4];
                const event = JSON.parse(args[5]);
 console.log("event ", JSON.parse(args[5]));
                const bottomAngleRad = args[6];

                const rect = svgRoot.nativeElement.getBoundingClientRect();
                const center = {
                    x: rect.left + viewBoxSize * scaleFactor / 2,
                    y: rect.top + (translateYValue + radius) * scaleFactor,
                };
                let actualAngle = Math.atan2(center.x - event.clientX, event.clientY - center.y);
                if (actualAngle < 0) {
                    actualAngle = actualAngle + 2 * Math.PI;
                }

                let relativeValue = 0;
                if (actualAngle < bottomAngleRad / 2) {
                    relativeValue = 0;
                } else if (actualAngle > 2 * Math.PI - bottomAngleRad / 2) {
                    relativeValue = 1;
                } else {
                    relativeValue = (actualAngle - bottomAngleRad / 2) / (2 * Math.PI - bottomAngleRad);
                }

                return relativeValue;
            } catch (e) {
                console.log("e ", e);
                return e
            }


        }, [svgRoot, viewBoxSize, scaleFactor, translateYValue, radius, event, bottomAngleRad])
    }
}
