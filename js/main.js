import {generatePosts} from './data.js';
import {createThumbnailsLayout} from './layout.js';
import {initImageForm} from './form.js';
import {initImageScaling} from './scale.js';
import {initEffects} from './effects.js';

const posts = generatePosts();
createThumbnailsLayout(posts);
initImageForm();
initImageScaling();
initEffects();
