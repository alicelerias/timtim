import React from 'react'

export const defaultFilter = { user: null, epic: null }

export const filterReducer = (state, action) => {
  return { ...state, ...action }
}

export default React.createContext('FiltersContext')

// const initialContext = {
//   tasks: [],
//   filters: {
//     user: null,
//     epic: null
//   }
// }

// const ACTION_FILTER_USER = 'FILTER_USER'
// const ACTION_LOAD_TASK = 'LOAD_TASK'

// export const reducer = (state, action) => {
//   console.log(state)
//   console.log(action)
//   switch(action.type) {
//     case ACTION_LOAD_TASK:
//       return state
//     case ACTION_FILTER_USER:
//       return {
//         ...state,
//         filters: {
//           ...state.filters,
//           user: action.value
//         }
//       }
//     default:
//       return state // do nothing
//   }
// }

// const actionFilterUser = (user) => {
//   return{
//     type: ACTION_FILTER_USER,
//     name: user.name,
//     id: user.id,
//   }
// }

// // // usage
// dispatcher(actionFilterUser(user))
