const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const renderThumbnailsLayout = (pictures) => {
  const fragment = document.createDocumentFragment();

  for(const pic of pictures){
    const picItem = pictureTemplate.cloneNode(true);
    picItem.querySelector('img').src = pic.url;
    picItem.querySelector('.picture__comments').textContent = pic.comments;
    picItem.querySelector('.picture__likes').textContent = pic.likes;
    fragment.append(picItem);
  }
  picturesContainer.append(fragment);
};

export{renderThumbnailsLayout};
