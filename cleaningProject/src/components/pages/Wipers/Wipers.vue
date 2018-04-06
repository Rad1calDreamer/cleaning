<template>
  <main class="l-home-page">
    <app-header></app-header>

    <div class="l-home">
      <h1 class="white--text text-xs-center my-0">Список дворников</h1>
      <div class="add-button">
        <v-btn @click.native="addWiper">Добавить</v-btn>
      </div>
      <cleaning-list>
        <cleaning-list-header slot="cleaning-list-header"></cleaning-list-header>
        <cleaning-list-body slot="cleaning-list-body" :wipers="wipers" @removeItem="removeWiper" @editItem="editWiper"></cleaning-list-body>
      </cleaning-list>
    </div>
    <add-form v-if="showModal" @closeModal="showModal = false"></add-form>
    <edit-form v-if="showModalEdit" @closeModal="showModalEdit = false" :wiper="_curWiper"></edit-form>
  </main>
</template>

<script>
  import Axios from 'axios';
  import Authentication from '@/components/pages/Authentication';
  import cleaningListHeader from '../../cleaning/cleaningListHeader';
  import cleaningListBody from '../../cleaning/cleaningListBody';
  import addForm from '../../pages/Wipers/Add';
  import editForm from '../../pages/Wipers/Edit';
  import Wipers from '@/components/pages/Wipers';

  const cleaningManagerAPI = `http://${window.location.hostname}:3001`;
  export default {
    components: {
      'cleaning-list-header': cleaningListHeader,
      'cleaning-list-body': cleaningListBody,
      'add-form': addForm,
      'edit-form': editForm
    },
    data() {
      return {
        _curWiper:{},
        wipers: [],
        showModal: false,
        showModalEdit: false

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
      removeWiper(id){
        Wipers.remove(this, id);
      },
      editWiper(item){
        this.showModalEdit = true;
        this._curWiper = item;
      },
      closeModal(){
        this.showModal = false;
      }
    }
  };
</script>

<style lang="less" scoped>
  @import "../../../assets/styles.less";
  .add-button{
    display: flex;
    justify-content: flex-end;
  }
  .l-home {
    background-color: @border-color-input;
    margin: 25px auto;
    padding: 15px;
    min-width: 272px;
  }
</style>
