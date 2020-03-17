const notificationReducer = (state = '', action) => {
	console.log('ACTION: ', action)
	switch (action.type) {
		case 'SET_NOTIFICATION':
			return action.data
		case 'DELETE_NOTIFICATION':
			return ''
		default:
			return state
	}
}

export const showNotification = (content, time) => {
	return async dispatch => {
		dispatch({
			type: 'SET_NOTIFICATION',
			data: content
		})
		setTimeout(() => {
			dispatch({
				type: 'DELETE_NOTIFICATION'
			})
		}, time * 1000)
	}
}


export const deleteNotification = () => {
	return {
		type: 'DELETE_NOTIFICATION'
	}
}

export default notificationReducer