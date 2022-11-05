import React from 'react'

export const defaultFilter = { user: null, epic: null }

export const filterReducer = (state, action) => {
  return { ...state, ...action }
}

export default React.createContext('FiltersContext')
