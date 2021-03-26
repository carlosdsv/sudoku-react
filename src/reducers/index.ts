import reducer from './reducer'

export * from './actions'
export * from './interfaces'

export type Reducer = ReturnType<typeof reducer>
export default reducer
