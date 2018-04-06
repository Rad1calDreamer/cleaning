<template>
  <div>
    <app-modal @closeModal="closeModal">
    <div class="l-auth-container">
      <div class="l-auth">
        <v-form v-model="wiperAdd">
          <v-text-field label="ФИО"
                        v-model="wiper.name"
                        prepend-icon="account_box"
                        :rules="rules"
                        required
                        color="light-blue lighten-1">
          </v-text-field>

          <v-text-field label="Телефон"
                        v-model="wiper.phone"
                        prepend-icon="phone"
                        :rules="rules"
                        return-masked-value
                        mask="###-###-##-##"
                        color="light-blue lighten-1"
                        required>
          </v-text-field>

          <v-btn color="light-blue lighten-1" @click.native="addWiper()">Добавить</v-btn>
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
  import Wipers from '@/components/pages/Wipers';
  const cleaningManagerAPI = `http://${window.location.hostname}:3001`;
  export default {
    components: {
      'app-modal': modal,
    },
    data() {
      return {
        snackbar: false,
        wiperAdd: false,
        rules: [value => !!value || 'Обязательное поле'],
        wiper: {
          name: '',
          phone: ''
        },
        message: ''
      };
    },
    methods: {
      addWiper: function(){
        Wipers.add(this, this.wiper);
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
