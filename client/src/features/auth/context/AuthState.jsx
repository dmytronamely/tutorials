import React, { useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'
import { SIGN_IN, SIGN_OUT } from './types'

// STATE: { isLoggedIn, user: {}}
export const AuthState = ({children}) => {
  const initialState = { isLoggedIn: false, user: {} }
  const [state, dispatch] = useReducer(authReducer, initialState)

  const signIn = ({ userName }) => {
    const user = {
      id: uuidv4(),
      userName: userName
    }
    dispatch({ type: SIGN_IN, user })
  }

  const signOut = () => {
    dispatch({ type: SIGN_OUT })
  }

  return (
    <AuthContext.Provider value = {{
      signIn, signOut,
      isLoggedIn: state.isLoggedIn,
      user: state.user
    }} >
      { children }
    </ AuthContext.Provider>
  );
}

export default AuthState;
