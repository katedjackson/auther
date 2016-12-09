import axios from 'axios';
import store from '../store';

/* -----------------    ACTIONS     ------------------ */

const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER'

/* ------------   ACTION CREATORS     ------------------ */

const removeCurrentUser  = user => ({ type: REMOVE_CURRENT_USER, user: user })

/* ------------       REDUCER     ------------------ */

export default function reducer (user = {}, action) {
  switch (action.type) {

    case REMOVE_CURRENT_USER:
      return action.user

    default:
      return user;
  }
}

/* ------------       DISPATCHERS     ------------------ */

export const removeUser = () => dispatch => {
  axios.get(`/logout`)
       .then(res => {
          console.log(store.getState());
          if(res.status === 200) store.getState().user = {};
        })
       .catch(err => console.error(`Logging out user unsuccesful`, err))
}
