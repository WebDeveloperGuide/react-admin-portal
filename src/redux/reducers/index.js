import { combineReducers } from 'redux';

import todoReducer from './todo.reducer';
import visibilityFilter from './todo_filter.reducer';
import auth from './auth.reducer';

const rootReducer = combineReducers({
    todos:todoReducer,
    visibilityFilter,
    auth
});

export default rootReducer;