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
	return {
		type: 'SET_NOTIFICATION',
		data: content,
	}


}

export const deleteNotification = () => {
	return {
		type: 'DELETE_NOTIFICATION'
	}
}

export default notificationReducer