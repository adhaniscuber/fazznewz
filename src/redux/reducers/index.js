import {
  SET_ACTIVE_TAB,
  SET_CATEGORY,
  SET_SOURCE,
  SHOW_MODAL,
} from "../actions/types";

const initialState = {
  tabActive: "Headline",
  modalShow: false,
  category: "general",
  source: {
    label: "TechCrunch",
    value: "techcrunch",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_TAB:
      return {
        ...state,
        tabActive: action.payload,
      };
    case SET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    case SET_SOURCE:
      return {
        ...state,
        source: action.payload,
        modalShow: false,
      };
    case SHOW_MODAL:
      return {
        ...state,
        modalShow: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
