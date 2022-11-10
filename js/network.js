import {createThumbnailsLayout} from './layout.js';

const downloadUrl = 'https://27.javascript.pages.academy/kekstagram-simple/data';
const uploadUrl = 'https://27.javascript.pages.academy/kekstagram-simple';

const getData = () => {
  fetch(downloadUrl)
    .then((response) => response.json())
    .then((posts) => createThumbnailsLayout(posts));
};

const sendData = (onSucces, onFail, body) => {
  fetch(
    uploadUrl,
    {
      method: 'POST',
      body: body,
    })
    .then(onSucces())
    .catch(onFail());
};

export {getData, sendData};
