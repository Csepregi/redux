import React from 'react'
import { useDispatch } from 'react-redux'
import { addNewAnecdote } from '../reducers/anecdoteReducer'
import { showNotification } from '../reducers/notificationReducer'
import { deleteNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
	const dispatch = useDispatch()
	const addAnecdote = async (event) => {
		event.preventDefault()
		const content = event.target.anecdote.value
		event.target.value = ''
		// const newAnecdote = await anecdoteService.createNew(content)
		dispatch(addNewAnecdote(content))
		dispatch(showNotification(`you added ${content}`))
		setTimeout(() => {
			dispatch(deleteNotification())
		}, 5000)
	}

	return (
		<form onSubmit={addAnecdote}>
			<input name="anecdote" />
			<button type="submit">add</button>
		</form>
	)
}

export default AnecdoteForm