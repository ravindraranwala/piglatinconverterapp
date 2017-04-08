import { PIG_LATIN } from '../actions/index';
const INITIAL_STATE = { output: null };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case PIG_LATIN:
    console.log(action.payload);
      return { ...state, output: action.payload };
      break;
    default:
      return state;
   }
}
