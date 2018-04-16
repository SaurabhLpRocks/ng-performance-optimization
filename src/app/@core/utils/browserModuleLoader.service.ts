import { Component, Inject, Injectable, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Injectable()
export class BrowserModuleLoaderService {
    private _L: any;
    // private _jquery: any;

    public constructor(@Inject(PLATFORM_ID) private _platformId: Object) {
        this._init();
    }

    // public getJquery() {
    //     return this._safeGet(() => this._jquery);
    // }

    public getL() {
        return this._safeGet(() => this._L);
    }

    private _init() {
        if (isPlatformBrowser(this._platformId)) {
            this._requireLegacyResources();
        }
    }

    private _requireLegacyResources() {
        // this._jquery = require('jquery');
        this._L = require('leaflet');
    }

    private _safeGet(getCallcack: () => any) {
        if (isPlatformServer(this._platformId)) {
            throw new Error('invalid access to legacy component on server');
        }

        return getCallcack();
    }
}