<template>
  <div>
    <app-modal @closeModal="closeModal">
    <div class="l-auth-container">
      <div class="l-auth">
        <v-form v-model="itemAdd">
          <v-text-field label="Адрес"
                        v-model="item.name"
                        prepend-icon="place"
                        :rules="rules"
                        required
                        color="light-blue lighten-1">
          </v-text-field>

          <v-select label="Управляющая компания"
                    color="light-blue lighten-1"
                    v-model="item.company"
                    prepend-icon="work"
                    :items="managementCompanyList"
                    item-text="name"
                    item-value="_id"
                    single-line>
          </v-select>

          <v-btn color="light-blue lighten-1" @click.native="addItem()">Добавить</v-btn>
        </v-form>
      </div>
    </div>
    </app-modal>
  </div>
</template>

<script>
  import modal from '../../Modal';
  import Axios from 'axios';
  import Authentication from '@/components/pages/Authentication';
  import Address from '@/components/pages/Address';
  const cleaningManagerAPI = `http://${window.location.hostname}:3001`;
  export default {
    props:['managementCompanyList'],
    components: {
      'app-modal': modal,
    },
    data() {
      return {
        snackbar: false,
        itemAdd: false,
        rules: [value => !!value || 'Обязательное поле'],
        companyId: '',
        item: {
          name: '',
          company: null
        },
        message: ''
      };
    },
    methods: {
      addItem: function(){
        Address.add(this, this.item);
      },
      closeModal(){
       this.$emit('closeModal')
      }
    }
  };
</script>
<style lang="less">
  @import "../../../assets/styles.less";

  .l-auth {
    background-color: @border-color-input;
    padding: 15px;
    min-width: 272px;
    max-width: 320px;
    animation: bounceIn 1s forwards ease;
  }

  .l-signup {
    background-color: @border-color-input;
    padding: 15px;
    margin: 45px auto;
    min-width: 272px;
    max-width: 320px;
    animation: slideInFromLeft 1s forwards ease;
  }
</style>
