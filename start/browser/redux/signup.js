import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const ADD_NEW_USER = 'ADD_NEW_USER'

/* ------------   ACTION CREATORS     ------------------ */

const addNewUser  = user => ({ type: ADD_NEW_USER, user: user })

/* ------------       REDUCER     ------------------ */

export default function reducer (user = {}, action) {
  switch (action.type) {

    case ADD_NEW_USER:
      return action.user

    default:
      return user;
  }
}

/* ------------       DISPATCHERS     ------------------ */

export const userSignup = user => dispatch => {
  axios.post('/signup', user)
       .then(res => {
          //if(res.status === 404) throw err(next)
          if(res.status === 204) dispatch(addNewUser(user));

        })
       //.then(user => console.dir(user))
       .catch(err => console.error(`Addind new user: ${user.name} unsuccesful`, err))
}
