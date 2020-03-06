import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import LoginReducer from './LoginReducer';
import HomeListPostReducer from './HomeListPostReducer';

export default combineReducers({
    user: UserReducer,
    login: LoginReducer,
    homeListPost: HomeListPostReducer,
})