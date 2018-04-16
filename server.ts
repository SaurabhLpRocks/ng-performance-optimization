import 'zone.js/dist/zone-node';
import 'reflect-metadata';

import * as express from 'express';

import { enableProdMode } from '@angular/core';
import { join } from 'path';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

const MockBrowser = require('mock-browser').mocks.MockBrowser;
const mock = new MockBrowser();

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Express server
const app = express();

const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist');

// Fix for window error:
const domino = require('domino');
const fs = require('fs');
const path = require('path');
const template = fs.readFileSync(path.resolve('./', 'dist', 'browser/', 'index.html')).toString();
const win = domino.createWindow(template);

// workaround for leaflet
global['window'] = win;
global['document'] = win.document;

// workaround for nex-charts
win.screen = { deviceXDPI: 0, logicalXDPI: 0 };
global['MouseEvent'] = win.MouseEvent;
global['navigator'] = mock.getNavigator();



// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/server/main.bundle');

// AppServerModuleNgFactory is undefined
console.log('AppServerModuleNgFactory', AppServerModuleNgFactory);

// This is injected
console.log('LAZY_MODULE_MAP', LAZY_MODULE_MAP);

// Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));

// Example Express Rest API endpoints
// app.get('/api/**', (req, res) => { });
// Server static files from /browser
app.get('*.*', express.static(join(DIST_FOLDER, 'browser'), {
  maxAge: '1y'
}));

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  res.render('index', { req });
});

// Start up the Node server
app.listen(PORT, () => {
  console.log(`Node Express server listening on http://localhost:${PORT}`);
});
