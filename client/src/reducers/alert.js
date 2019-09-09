import { SET_ALERT, REMOVE_ALERT } from "../actions/types";

const initialState = [
  {
    id: 1,
    msg: "Please login",
    alertType: "success"
  }
];

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_ALERT:
      return [...state];
    case REMOVE_ALERT:
      return [...state];
  }
}
