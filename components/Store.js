// get createContext and useReducer from react to create store
import { createContext, useReducer } from 'react'

// create Store with createContext
export const Store = createContext()

// create reducer function with params state,and action
function reducer(state, action) {
  // swqitch between the actions
  switch (action.type) {
    default:
      return state
  }
}
//  make initialState
const initialState={
  cart:{loading:true},
  order:null
}
// create StoreProvider
export function StoreProvider(props){
  // use state ans dispatch
  const {state,dispatch}=useReducer(reducer,initialState)

  // create value
  const value={state,dispatch}
  return <Store.Provider value={value}>{props.children}</Store.Provider>
}
