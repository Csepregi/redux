import anecdoteService from '../services/anecdotes'

// const getId = () => (100000 * Math.random()).toFixed(0)

// const asObject = (anecdote) => {
//   return {
//     content: anecdote,
//     id: getId(),
//     votes: 0
//   }
// }


const anectodeReducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_ANECDOTES':
      return action.data
    case 'VOTE':
      const id = action.data.id
      const anecdoteToChange = state.find(n => n.id === id)
      anecdoteToChange.votes = anecdoteToChange.votes + 1
      return state.map(anecdote =>
        anecdote.id !== id ? anecdote : anecdoteToChange
      )
    case 'ADD_NEW':
      return [...state, action.data]
    default:
      return state
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }

}

export const vote = (content, id) => {
  return async dispatch => {
    await anecdoteService.update(content, id)
    dispatch({
      type: 'VOTE',
      data: { id }
    })
  }

}

export const addNewAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'ADD_NEW',
      data: newAnecdote
    })
  }

}

export default anectodeReducer