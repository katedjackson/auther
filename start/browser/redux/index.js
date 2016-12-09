import { combineReducers } from 'redux';
import users from './users';
import stories from './stories';
import login from './login';
import signup from './signup';
import logout from './logout';

export default combineReducers({ users, stories, login, signup, logout });
