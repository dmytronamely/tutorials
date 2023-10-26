import { SIGN_IN, SIGN_OUT } from "./types"

const handlers = {
  [SIGN_IN]: (state, { user }) => ({
    ...state,
    user: user,
    isLoggedIn: true
  }),
  [SIGN_OUT]: (state) => ({
    ...state,
    user: {},
    isLoggedIn: false
  }),

  DEFAULT: state => state
}

export const authReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT
  
  return handle(state, action)
}
