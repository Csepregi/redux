import React from 'react'
import setFilter from '../reducers/filterReducer'

const Filter = (props) => {
	//const dispatch = useDispatch()
	const handleChange = (event) => {
		props.dispatch(setFilter(event.target.value))

	}
	const style = {
		marginBottom: 10
	}

	return (
		<div style={style}>
			filter <input onChange={handleChange} />
		</div>
	)
}

export default Filter