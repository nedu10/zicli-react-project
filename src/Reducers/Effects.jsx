import * as ACTIONS from "./ActionConstants.jsx";

const { SHOW_CAPTION_FORM, SHOW_CAPTION_TAG_FORM, TOGGLE_ICON } = ACTIONS;

export const showCaptionForm = option => ({
  type: SHOW_CAPTION_FORM,
  option
});

export const showCaptionTagForm = option => ({
  type: SHOW_CAPTION_TAG_FORM,
  option
});

export const toggleIcon = () => ({
  type: TOGGLE_ICON
});


export default function reducer(
  state = {
    isCaptionForm: false,
    setQuery: null,
    isIcon: false,
    isCaptionTagForm: false
  },
  action
  ) {
  switch (action.type) {
    case SHOW_CAPTION_FORM:
      return {
        ...state,
        isCaptionForm: action.option
      };
    case SHOW_CAPTION_TAG_FORM:
      return {
        ...state,
        isCaptionTagForm: action.option[0],
        setQuery: action.option[1]
      };
    case TOGGLE_ICON:
      return {
        ...state,
        isIcon: !state['isIcon']
      };
    default:
      return state;
  }
}
