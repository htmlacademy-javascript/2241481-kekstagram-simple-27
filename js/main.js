import {initImageForm} from './form.js';
import {initImageScaling} from './scale.js';
import {initEffects} from './effects.js';
import {getData} from './network.js';

getData();
initImageForm();
initImageScaling();
initEffects();
