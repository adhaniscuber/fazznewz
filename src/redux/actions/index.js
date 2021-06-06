import { SET_ACTIVE_TAB, SET_CATEGORY, SHOW_MODAL, SET_SOURCE } from "./types";

export const updateCategory = value => dispatch => {
  try {
    dispatch({
      type: SET_CATEGORY,
      payload: value,
    });
  } catch (error) {
    console.log("Error", error);
  }
};

export const updateSource = value => dispatch => {
  try {
    dispatch({
      type: SET_SOURCE,
      payload: value,
    });
  } catch (error) {
    console.log("Error", error);
  }
};

export const activeTab = value => dispatch => {
  try {
    dispatch({
      type: SET_ACTIVE_TAB,
      payload: value,
    });
  } catch (error) {
    console.log("Error", error);
  }
};

export const showModalSource = value => dispatch => {
  try {
    dispatch({
      type: SHOW_MODAL,
      payload: value,
    });
  } catch (error) {
    console.log("Error", error);
  }
};
