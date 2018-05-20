<template>
  <div>
    <app-modal @closeModal="closeModal">
    <div class="l-auth-container">
      <div class="l-auth">
        <v-form v-model="addressEdit">
          <v-text-field label="Адрес"
                        v-model="item.name"
                        prepend-icon="place"
                        :rules="rules"
                        required
                        color="light-blue lighten-1">
          </v-text-field>

          <v-select label="Управляющая компания"
                    color="light-blue lighten-1"
                    v-model="item.managementCompanyId"
                    prepend-icon="work"
                    :items="managementCompanyList"
                    item-text="name"
                    item-value="_id"
                    single-line>
          </v-select>

          <v-btn color="light-blue lighten-1" @click.native="edit()">Обновить</v-btn>
        </v-form>
      </div>
    </div>
    </app-modal>
  </div>
</template>

<script>
  import modal from '../../Modal';
  import Address from '@/components/pages/Address';
  export default {
    props:['item','managementCompanyList','managementCompanyId'],
    components: {
      'app-modal': modal,
    },
    managementCompanyId: null,
    item:{
      name: '',
      managementCompanyId:null
    },
    managementCompanyList: [],
    data() {
      return {
        snackbar: false,
        addressEdit: false,
        rules: [value => !!value || 'Обязательное поле'],
        message: ''
      };
    },
    methods: {
      edit: function(){
        Address.edit(this, this.item);
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
