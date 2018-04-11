import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TemperatureDraggerComponent } from './temperature-dragger.component';

describe('TemperatureDraggerComponent', () => {
    let comp: TemperatureDraggerComponent;
    let fixture: ComponentFixture<TemperatureDraggerComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ TemperatureDraggerComponent ],
            schemas: [ NO_ERRORS_SCHEMA ]
        });
        fixture = TestBed.createComponent(TemperatureDraggerComponent);
        comp = fixture.componentInstance;
    });

    it('can load instance', () => {
        expect(comp).toBeTruthy();
    });

    it('fillColors defaults to: #2ec6ff', () => {
        expect(comp.fillColors).toEqual('#2ec6ff');
    });

    it('disableArcColor defaults to: #999999', () => {
        expect(comp.disableArcColor).toEqual('#999999');
    });

    it('bottomAngle defaults to: 90', () => {
        expect(comp.bottomAngle).toEqual(90);
    });

    it('arcThickness defaults to: 18', () => {
        expect(comp.arcThickness).toEqual(18);
    });

    it('thumbRadius defaults to: 16', () => {
        expect(comp.thumbRadius).toEqual(16);
    });

    it('thumbBorder defaults to: 3', () => {
        expect(comp.thumbBorder).toEqual(3);
    });

    it('maxLeap defaults to: 0.4', () => {
        expect(comp.maxLeap).toEqual(0.4);
    });

    it('value defaults to: 50', () => {
        expect(comp.value).toEqual(50);
    });

    it('min defaults to: 0', () => {
        expect(comp.min).toEqual(0);
    });

    it('max defaults to: 100', () => {
        expect(comp.max).toEqual(100);
    });

    it('step defaults to: 0.1', () => {
        expect(comp.step).toEqual(0.1);
    });

    it('off defaults to: false', () => {
        expect(comp.off).toEqual(false);
    });

    it('scaleFactor defaults to: 1', () => {
        expect(comp.scaleFactor).toEqual(1);
    });

    it('bottomAngleRad defaults to: 0', () => {
        expect(comp.bottomAngleRad).toEqual(0);
    });

    it('radius defaults to: 100', () => {
        expect(comp.radius).toEqual(100);
    });

    it('translateXValue defaults to: 0', () => {
        expect(comp.translateXValue).toEqual(0);
    });

    it('translateYValue defaults to: 0', () => {
        expect(comp.translateYValue).toEqual(0);
    });

    it('thickness defaults to: 6', () => {
        expect(comp.thickness).toEqual(6);
    });

    it('pinRadius defaults to: 10', () => {
        expect(comp.pinRadius).toEqual(10);
    });

    it('colors defaults to: []', () => {
        expect(comp.colors).toEqual([]);
    });

});
