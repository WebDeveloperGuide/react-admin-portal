import { todoConstants } from '../constants';

const {SET_VISIBILITY_FILTER,SHOW_ACTIVE} = todoConstants;

const visibilityFilter = (
	  state = SHOW_ACTIVE,
	  action
) => {
	
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};


export default visibilityFilter;



