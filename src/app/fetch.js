import axios from 'axios';

// Get Request
export const getRequest = (api, param) => {
  axios
    .get(api, {
      method: 'GET',
      params: param,
      headers: {
        Accept: 'Application/json',
      },
    })
    .then(res => {
      return res.data;
    })
    .catch(error => console.log('getRequest Error from fetch file ==>', error));
};

// Get Request
export const postRequest = (api, body) => {
  try {
    axios
      .get(api, {
        method: 'POST',
        headers: {
          Accept: 'Application/json',
        },
        data: body,
      })
      .then(res => {
        return res.data;
      })
      .catch(error =>
        console.log('postRequest Error from fetch file ==>', error),
      );
  } catch (error) {
    console.log('error try Catch postRequest ==>', error);
  }
};
