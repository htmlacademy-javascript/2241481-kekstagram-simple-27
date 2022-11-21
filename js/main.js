import {initImageForm} from './form.js';
import {initImageScaling} from './scale.js';
import {initEffects} from './effects.js';
import {getData} from './network.js';
import {renderThumbnailsLayout} from './layout.js';
import {showRecieveDataError} from './message.js';

getData(
  (data) => {
    renderThumbnailsLayout(data);
  },
  () => showRecieveDataError()
);

initImageForm();
initImageScaling();
initEffects();
