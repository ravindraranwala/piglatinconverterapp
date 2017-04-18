import { PIG_LATIN } from '../actions/index';
const INITIAL_STATE = { output: null };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case PIG_LATIN:
      return { ...state, output: action.payload };
    default:
      return state;
   }
}
