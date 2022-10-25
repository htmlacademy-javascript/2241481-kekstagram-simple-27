import {generatePosts} from './data.js';
import {createThumbnailsLayout} from './layout.js';

const posts = generatePosts();
createThumbnailsLayout(posts);
