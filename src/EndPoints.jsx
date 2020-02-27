import axios from "axios";

export const getCaptions = () => {
  return axios
    .get(`https://capcards-api.herokuapp.com/v1.0/api/caption/`)
    .then(response => {
      return response;
    })
    .catch(err => {
      return err;
    });
};

export const addNewCaption = value => {
  return axios
    .post(`https://capcards-api.herokuapp.com/v1.0/api/caption/`, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      data: { caption: value }
    })
    .then(response => {
      console.log(response);
      return response;
    });
};

export const fetchTags = () => {
  return axios
  .get(`https://capcards-api.herokuapp.com/v1.0/api/tag/`)
    .then(response => {
      console.log(response);
      return response;
    })
}

export const addTagToCaption = value => {
  return axios
    .post(`https://capcards-api.herokuapp.com/v1.0/api/caption/`, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({ captionId: 2, tagId: 4 })
    })
    .then(response => {
      console.log(response);
      return response;
    });
};
