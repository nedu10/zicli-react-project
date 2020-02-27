import * as ACTIONS from "./ActionConstants.jsx";
import { addNewCaption, addTagToCaption } from "../EndPoints.jsx";

const { ADD_CAPTION, FETCH_CAPTIONS, FETCH_TAGS } = ACTIONS;

export const addCaption = e => dispatch => {
  e.preventDefault()
  let captions = []

  let value = e.target.caption.value
  addNewCaption(value)
    .then(response => {
      if (response.data) {
        captions = response.data.data.captions
      }
    })
  return {
    type: ADD_CAPTION,
    captions
  };
};


export const fetchAllCaptions = captions => {
  return {
    type: FETCH_CAPTIONS,
    captions
  };
};

export const fetchAllTags = tags => {
  return {
    type: FETCH_TAGS,
    tags
  };
};


// export const addNewTagToCaption = (e, ) => dispatch => {
//   e.preventDefault()

//   addTagToCaption
//   return {
//     type: FETCH_CAPTIONS,
//     captions
//   };
// };


export default function reducer(
  state = {
    captions: [],
    tags: []
  },
  action
) {
  switch (action.type) {
    case ADD_CAPTION:
      return {
        ...state,
        captions: action.captions
      };
    case FETCH_TAGS:
      return {
        ...state,
        tags: action.tags
      };
    case FETCH_CAPTIONS:
      return {
        ...state,
        captions: action.captions
      };
    default:
      return state;
  }
}
