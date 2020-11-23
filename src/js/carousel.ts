import '../scss/index.scss';

import comic from './modules/comic';
import slideshow from './modules/slideshow';

import Modules from './modules';
new Modules().init([comic, slideshow]);
