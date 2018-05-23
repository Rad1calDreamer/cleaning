import Axios from 'axios'
import router from '@/router'
import Authentication from "@/components/pages/Authentication";

const cleaningManagerAPI = `http://${window.location.hostname}:3001`;

export default {

  add(context, item) {
    Axios.post(`${cleaningManagerAPI}/api/v1/work/add`, item,{
        headers: {
          Authorization: Authentication.getAuthenticationHeader(context)
        }})
      .then(() => {
        context.$parent.showModal = false;
        context.$parent.getItems();
      }).catch(({ response: { data } }) => {
      context.snackbar = true;
      context.message = data.message
    })
  },
  remove(context, id){
    Axios.post(`${cleaningManagerAPI}/api/v1/work/remove`, {id:id},{
        headers: {
          Authorization: Authentication.getAuthenticationHeader(context)
        }})
      .then(() => {
        context.getItems();
      }).catch(({ response: { data } }) => {
      console.log('error', data)
    })
  },

  edit(context, item){
    Axios.post(`${cleaningManagerAPI}/api/v1/work/edit`, item,{
        headers: {
          Authorization: Authentication.getAuthenticationHeader(context)
        }})
      .then(() => {
        context.$parent.showModalEdit = false;
        context.$parent.getItems();
      }).catch(({ response: { data } }) => {
      console.log('error', data)
    })
  },
}
