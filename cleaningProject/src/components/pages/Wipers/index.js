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
  remove(context, id){
    Axios.post(`${cleaningManagerAPI}/api/v1/wipers/remove`, {id:id},{
        headers: {
          Authorization: Authentication.getAuthenticationHeader(context)
        }})
      .then(() => {
        context.getWipers();
      }).catch(({ response: { data } }) => {
        console.log('error', data)
    })
  },

  edit(context, wiper){
    Axios.post(`${cleaningManagerAPI}/api/v1/wipers/edit`, wiper,{
        headers: {
          Authorization: Authentication.getAuthenticationHeader(context)
        }})
      .then(() => {
        context.getWipers();
        context.$parent.showModalEdit = false;
      }).catch(({ response: { data } }) => {
        console.log('error', data)
    })
  }
}
