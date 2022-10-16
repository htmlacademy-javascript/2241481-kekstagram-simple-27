import {getRandomPositiveInteger} from './util.js';
import {getRandomArrayItem} from './util.js';

const MAX_POST_COUNT = 25;
const MAX_LIKE_COUNT = 200;
const MIN_LIKE_COUNT = 15;
const MAX_COMMENTS_COUNT = 25;

const DESCRIPTIONS = [
  'Я на отдыхе',
  'Я на работе',
  'Моя машина',
  'Моя собака',
  'Самая вкусная еда!',
  'Никогда больше сюда не приду!',
  'Это я долго буду помнить!'
];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Горизонт завален.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const FIRST_NAME = ['Артём','Сергей','Николай','Борис','Владимир','Евгений','Пётр'];
const LAST_NAME = ['Иванов','Петров','Сидоров','Соколов','Кузнецов','Козлов','Степанов'];

const generateUserName = () =>
  `${getRandomArrayItem(FIRST_NAME)} ${getRandomArrayItem(LAST_NAME)}`;

const createMessage = () =>
  Array.from({length: getRandomPositiveInteger(1, 3)}, () => getRandomArrayItem(COMMENTS)).join(' ');

const createComment = (commentId) =>({
  id: commentId,
  avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
  message: createMessage(),
  name: generateUserName()
});

const generateComments = (commentCount) => {
  const comments = [];
  for (let i = 1; i <= commentCount; i++){
    comments.push(createComment(i));
  }

  return comments;
};

const createPost = (postId) => ({
  id: postId,
  url: `photos/${getRandomPositiveInteger(1, 25)}.jpg`,
  description: getRandomArrayItem(DESCRIPTIONS),
  likes: getRandomPositiveInteger(MIN_LIKE_COUNT, MAX_LIKE_COUNT),
  comments: generateComments(getRandomPositiveInteger(1, MAX_COMMENTS_COUNT))
});

const generatePosts = () =>{
  const posts = [];
  for(let i = 1; i <= MAX_POST_COUNT; i++){
    posts.push(createPost(i));
  }

  return posts;
};

export {generatePosts};
