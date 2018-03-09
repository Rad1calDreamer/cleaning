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
    <app-modal v-if="showModal" @close="showModal = false"/>
  </main>
</template>

<script>
  import Axios from 'axios';
  import Authentication from '@/components/pages/Authentication';
  import cleaningListHeader from '../../cleaning/cleaningListHeader';
  import cleaningListBody from '../../cleaning/cleaningListBody';
  import modal from '../../Modal';

  const cleaningManagerAPI = `http://${window.location.hostname}:3001`;
  export default {
    components: {
      'cleaning-list-header': cleaningListHeader,
      'cleaning-list-body': cleaningListBody,
      'app-modal': modal
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
