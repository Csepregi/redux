import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'


const AnecdoteList = () => {
	const dispatch = useDispatch()
	const anecdotes = useSelector(state => state.anecdotes)

	return (
		<div>
			<h2>Anecdotes</h2>
			{anecdotes.map(anecdote =>
				<div key={anecdote.id}>
					<div>
						{anecdote.content}
					</div>
					<div>
						has {anecdote.votes}
						<button onClick={() => dispatch(vote(anecdote, anecdote.id))}>vote</button>
					</div>
				</div>
			)}
		</div>
	)
}



export default AnecdoteList