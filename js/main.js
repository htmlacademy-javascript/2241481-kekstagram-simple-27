import {generatePosts} from './data.js';
import {createThumbnailsLayout} from './layout.js';
import {initImageForm} from './form.js';
import { initEffects } from './effects.js';

const posts = generatePosts();
createThumbnailsLayout(posts);
initImageForm();
initEffects();
