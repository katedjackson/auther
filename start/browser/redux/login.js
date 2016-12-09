import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const SET_CURRENT_USER = 'SET_CURRENT_USER'


/* ------------   ACTION CREATORS     ------------------ */

const setCurrentUser  = user => ({ type: SET_CURRENT_USER, user: user })


/* ------------       REDUCER     ------------------ */

export default function reducer (user = {}, action) {
  switch (action.type) {
    
    case SET_CURRENT_USER: 
      return action.user

    default: 
      return user;
  }
}


/* ------------       DISPATCHERS     ------------------ */



export const userLogin = user => dispatch => {
  console.dir(user)
  axios.post('/login', user)
       .then(res => {
          //if(res.status === 404) throw err(next)
          if(res.status === 204) dispatch(setCurrentUser(user));
          
        })
       //.then(user => console.dir(user))
       .catch(err => console.error(`Logging user: ${user.name} unsuccesful`, err))
}

