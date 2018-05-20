<template>
  <main class="l-home-page">
    <app-header></app-header>

    <div class="l-home">
      <h1 class="white--text text-xs-center my-0">Обслуживаемые дома</h1>
      <div class="add-button">
        <v-btn @click.native="addItem">Добавить</v-btn>
      </div>
      <cleaning-list>
        <cleaning-list-header slot="cleaning-list-header"></cleaning-list-header>
        <cleaning-list-body slot="cleaning-list-body" :items="items"  :companyList="companyList" @removeItem="removeItem" @editItem="editItem"></cleaning-list-body>
      </cleaning-list>
    </div>
    <add-form v-if="showModal" @closeModal="showModal = false" :managementCompanyList="companyList"></add-form>
    <edit-form v-if="showModalEdit" @closeModal="showModalEdit = false" :item="_curItem" :managementCompanyList="companyList"></edit-form>
  </main>
</template>

<script>
  import Axios from 'axios';
  import Authentication from '@/components/pages/Authentication';
  import cleaningListHeader from '../../list/address/header';
  import cleaningListBody from '../../list/address/body';
  import addForm from '../../pages/Address/Add';
  import editForm from '../../pages/Address/Edit';
  import Address from '@/components/pages/Address';

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
        _curItem:{},
        companyList: [],
        items: [],
        showModal: false,
        showModalEdit: false

      };
    },
    mounted() {
      this.getItems();
      this.getManagementCompanyList();
    },
    methods: {
      getItems() {
        Axios.get(`${cleaningManagerAPI}/api/v1/address`, {
          headers: {
            Authorization: Authentication.getAuthenticationHeader(this)
          },
          params: {user_id: this.$cookie.get('user_id')}
        }).then(({data}) => (this.items = data));
      },
      addItem() {
        this.showModal = true;
      },
      removeItem(id){
        Address.remove(this, id);
      },
      editItem(item){
        this.showModalEdit = true;
        this._curItem = item;
      },
      closeModal(){
        this.showModal = false;
      },
      getManagementCompanyList: function(){
        Axios.get(`${cleaningManagerAPI}/api/v1/management-company`, {
          headers: {
            Authorization: Authentication.getAuthenticationHeader(this)
          },
          params: {user_id: this.$cookie.get('user_id')}
        }).then(({data}) => (this.companyList = data));
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
