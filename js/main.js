import {initImageForm} from './form.js';
import {initImageScaling} from './scale.js';
import {initEffects} from './effects.js';
import {getData} from './network.js';
import {createThumbnailsLayout} from './layout.js';
import {showRecieveDataError} from './message.js';

getData(
  (data) => {
    createThumbnailsLayout(data);
  },
  () => showRecieveDataError()
);

initImageForm();
initImageScaling();
initEffects();
