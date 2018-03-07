import Axios from 'axios'
import router from '@/router'

const cleaningManagerAPI = `http://${window.location.hostname}:3001`

export default {
	wiper: {},

	add(context, wiper, redirect) {
		Axios.post(`${cleaningManagerAPI}/api/v1/wipers`, wiper)
			.then(({ data: { token } }) => {
				if (redirect) router.push(redirect)
			}).catch(({ response: { data } }) => {
				context.snackbar = true
				context.message = data.message
			})
	}
}