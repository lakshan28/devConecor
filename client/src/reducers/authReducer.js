//import { GET_ERRORS } from "../actions/types";
import isEmpty from "../validation/is-empty";
import { SET_CURRENT_USER } from "../actions/types";
const initialState = {
  isAuthenticated: false,
  // ********
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    // case GET_ERRORS:
    // return {
    //   ...state,
    //    user: action.payload
    //   };
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        //*********** */
        user: action.payload
      };

    default:
      return state;
  }
}
