const DOWNLOAD_URL = 'https://27.javascript.pages.academy/kekstagram-simple/data';
const UPLOAD_URL = 'https://27.javascript.pages.academy/kekstagram-simple';

const getData = (onSuccess, onError) => {
  fetch(DOWNLOAD_URL)
    .then((response) => {
      if (!response.ok){
        onError();
      }
      return response.json();
    })
    .then((posts) => {
      onSuccess(posts);
    });
};

const sendData = (onSucces, onFail, body) => {
  fetch(
    UPLOAD_URL,
    {
      method: 'POST',
      body: body,
    })
    .then((response) =>{
      if (response.ok){
        onSucces();
      } else {
        onFail();
      }
    })
    .catch(() =>{
      onFail();
    });
};

export {getData, sendData};
