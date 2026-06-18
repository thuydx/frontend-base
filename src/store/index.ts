/**
 * Redux store configuration for Frontend Base.
 *
 * This module defines the global UI state used across the dashboard shell,
 * including sidebar visibility, aside visibility, and theme preferences.
 *
 * @module store
 */
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { useSelector, TypedUseSelectorHook } from 'react-redux'

/**
 * Application UI state.
 *
 * @property {boolean} sidebarShow Controls visibility of the main sidebar
 * @property {boolean} sidebarUnfoldable Controls narrow/unfoldable sidebar mode
 * @property {boolean} asideShow Controls visibility of the right aside panel
 * @property {string} theme Stores current theme identifier
 */
type state = {
  sidebarShow: boolean
  sidebarUnfoldable: boolean
  asideShow: boolean
  theme: string
}

/**
 * Generic state update action used by the dashboard shell.
 *
 * @property {string} type Action type identifier
 * @property {boolean | string} [key] Additional state values to merge
 */
const initialState: state = {
  sidebarShow: true,
  sidebarUnfoldable: false,
  asideShow: false,
  theme: 'default',
}

type args = { type: string; [key: string]: boolean | string }

/**
 * Reducer handling global UI state updates.
 *
 * @param {state} state Current application state
 * @param {args} action Dispatched action with partial state payload
 * @returns {state} Updated application state
 */
const changeState = (state = initialState, { type, ...rest }: args) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest }
    default:
      return state
  }
}

/**
 * Creates the Redux store instance used by the application.
 *
 * @returns Redux store configured with the dashboard reducer
 */
export function makeStore() {
  return configureStore({
    reducer: changeState,
  })
}

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

export default store

/**
 * Typed selector hook for reading strongly-typed values from Redux state.
 *
 * @see https://react-redux.js.org/using-react-redux/static-typing#typing-the-useselector-hook
 */
export const useTypedSelector: TypedUseSelectorHook<state> = useSelector
