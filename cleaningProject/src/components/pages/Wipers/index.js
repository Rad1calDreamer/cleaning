import Axios from 'axios'
import router from '@/router'
import Authentication from "@/components/pages/Authentication";

const cleaningManagerAPI = `http://${window.location.hostname}:3001`

export default {

  add(context, wiper) {
    Axios.post(`${cleaningManagerAPI}/api/v1/wipers/add`, wiper,{
        headers: {
          Authorization: Authentication.getAuthenticationHeader(context)
        }})
      .then(() => {
        context.$parent.showModal = false;
        context.$parent.getWipers();
      }).catch(({ response: { data } }) => {
      context.snackbar = true;
      context.message = data.message
    })
  },
}
