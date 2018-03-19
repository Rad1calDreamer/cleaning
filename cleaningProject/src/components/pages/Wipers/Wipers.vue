<template>
  <main class="l-home-page">
    <app-header></app-header>

    <div class="l-home">
      <h4 class="white--text text-xs-center my-0">
        Список дворников
      </h4>
      <v-btn @click.native="addWiper">Добавить</v-btn>

      <cleaning-list>
        <cleaning-list-header slot="cleaning-list-header"></cleaning-list-header>
        <cleaning-list-body slot="cleaning-list-body" :wipers="wipers"></cleaning-list-body>
      </cleaning-list>
    </div>
    <add-form v-if="showModal" @closeModal="showModal = false"></add-form>
  </main>
</template>

<script>
  import Axios from 'axios';
  import Authentication from '@/components/pages/Authentication';
  import cleaningListHeader from '../../cleaning/cleaningListHeader';
  import cleaningListBody from '../../cleaning/cleaningListBody';
  import addForm from '../../pages/Wipers/Add';

  const cleaningManagerAPI = `http://${window.location.hostname}:3001`;
  export default {
    components: {
      'cleaning-list-header': cleaningListHeader,
      'cleaning-list-body': cleaningListBody,
      'add-form': addForm
    },
    data() {
      return {
        wipers: [],
        showModal: false
      };
    },
    mounted() {
      this.getWipers();
    },
    methods: {
      getWipers() {
        Axios.get(`${cleaningManagerAPI}/api/v1/wipers`, {
          headers: {
            Authorization: Authentication.getAuthenticationHeader(this)
          },
          params: {user_id: this.$cookie.get('user_id')}
        }).then(({data}) => (this.wipers = data));
      },
      addWiper() {
        this.showModal = true;
      },
      closeModal(){
        this.showModal = false;
      },
      foo(){
        alert(1)
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../../assets/styles";

  .l-home {
    background-color: $background-color;
    margin: 25px auto;
    padding: 15px;
    min-width: 272px;
  }
</style>
