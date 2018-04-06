import Axios from 'axios';
import router from '@/router';

const cleaningManagerAPI = `http://${window.location.hostname}:3001`

export default {
	user: { authenticated: false },

	authenticate(context, credentials, redirect) {
		Axios.post(`${cleaningManagerAPI}/api/v1/auth`, credentials)
			.then(({ data: { token } }) => {
				context.$cookie.set('token', token, '1D')
				context.validLogin = true
				this.user.authenticated = true

				if (redirect) router.push(redirect)
			}).catch(({ response: { data } }) => {
				context.snackbar = true
				context.message = data.message
			})
	},

	signup(context, credentials, redirect) {
		Axios.post(`${cleaningManagerAPI}/api/v1/signup`, credentials)
			.then(() => {
				context.validSignUp = true

				this.authenticate(context, credentials, redirect)
			}).catch(({ response: { data } }) => {
				context.snackbar = true
				context.message = data.message
			})
	},
	signout(context, redirect) {
		context.$cookie.delete('token')
		context.$cookie.delete('user_id')
		this.user.authenticated = false

		if (redirect) router.push(redirect)
	},

	checkAuthentication() {
		const token = document.cookie
		this.user.authenticated = !!token
	},

	getAuthenticationHeader(context) {
		return `Bearer ${context.$cookie.get('token')}`
	}
}
