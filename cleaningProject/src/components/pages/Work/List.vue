<template>
  <main class="l-home-page">
    <app-header></app-header>

    <div class="l-home">
      <h1 class="white--text text-xs-center my-0">Выполненные работы</h1>
      <div class="add-button">
        <v-btn @click.native="addItem">Добавить</v-btn>
        <v-btn @click.native="calculate">Рассчет</v-btn>
      </div>
      <cleaning-list>
        <cleaning-list-header slot="cleaning-list-header"></cleaning-list-header>
        <cleaning-list-body slot="cleaning-list-body" :items="items"  :addressList="addressList" :wiperList="wiperList" @removeItem="removeItem" @editItem="editItem"></cleaning-list-body>
      </cleaning-list>
      <sum-table :records="sumItems"></sum-table>
    </div>
    <div>

    </div>
    <add-form v-if="showModal" @closeModal="showModal = false" :addressList="addressList" :wiperList="wiperList"></add-form>
    <edit-form v-if="showModalEdit"
               @closeModal="showModalEdit = false"
               :item="_curItem"
               :wiperList="wiperList"
               :addressList="addressList">

    </edit-form>
    <calculate-form v-if="showModalCalculate" @closeModal="showModalCalculate = false"></calculate-form>
  </main>
</template>

<script>
  import Axios from 'axios';
  import Authentication from '@/components/pages/Authentication';
  import cleaningListHeader from '../../list/work/header';
  import cleaningListBody from '../../list/work/body';
  import addForm from '../../pages/Work/Add';
  import editForm from '../../pages/Work/Edit';
  import calculateForm from '../../pages/Work/Calculate';
  import CalcTable from '../../list/work/SumTable';
  import Work from '@/components/pages/Work';

  const cleaningManagerAPI = `http://${window.location.hostname}:3001`;
  export default {
    components: {
      'cleaning-list-header': cleaningListHeader,
      'cleaning-list-body': cleaningListBody,
      'add-form': addForm,
      'edit-form': editForm,
      'calculate-form': calculateForm,
      'sum-table': CalcTable,
    },
    data() {
      return {
        _curItem:{},
        wiperList: [],
        addressList: [],
        items: [],
        sumItems: [],
        showModal: false,
        showModalEdit: false,
        showModalCalculate: false
      };
    },
    mounted() {
      this.getItems();
      this.getAddressList();
      this.getWiperList();
    },
    methods: {
      getItems() {
      return  Axios.get(`${cleaningManagerAPI}/api/v1/work`, {
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
        Work.remove(this, id);
      },
      editItem(item){
        this.showModalEdit = true;
        this._curItem = item;
      },
      closeModal(){
        this.showModal = false;
      },
      getAddressList: function(){
        Axios.get(`${cleaningManagerAPI}/api/v1/address`, {
          headers: {
            Authorization: Authentication.getAuthenticationHeader(this)
          },
          params: {user_id: this.$cookie.get('user_id')}
        }).then(({data}) => (this.addressList = data));

      },
      getWiperList: function(){
        Axios.get(`${cleaningManagerAPI}/api/v1/wipers`, {
          headers: {
            Authorization: Authentication.getAuthenticationHeader(this)
          },
          params: {user_id: this.$cookie.get('user_id')}
        }).then(({data}) => (this.wiperList = data));
      },
      calculate: function(){
      this.showModalCalculate = true;
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
