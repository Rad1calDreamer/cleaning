<template>
  <div>
    <app-modal @closeModal="closeModal">
    <div class="l-auth-container">
      <div class="l-auth">
        <v-form v-model="itemAdd">

          <v-menu
            ref="dateStart"
            :close-on-content-click="false"
            v-model="menuDateStart"
            :nudge-right="40"
            :return-value.sync="date"
            lazy
            transition="scale-transition"
            offset-y
            full-width
            min-width="290px"
          >
            <v-text-field
              slot="activator"
              v-model="item.dateStart"
              label="Дата начала"
              prepend-icon="event"
              readonly
            ></v-text-field>
            <v-date-picker v-model="item.dateStart" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn flat color="primary" @click="this.dateStart = false">Cancel</v-btn>
              <v-btn flat color="primary" @click="$refs.dateStart.save(item.dateStart)">OK</v-btn>
            </v-date-picker>
          </v-menu>

          <v-menu
            ref="dateEnd"
            :close-on-content-click="false"
            v-model="menuDateEnd"
            :nudge-right="40"
            :return-value.sync="date"
            lazy
            transition="scale-transition"
            offset-y
            full-width
            min-width="290px"
          >
            <v-text-field
              slot="activator"
              v-model="item.dateEnd"
              label="Дата окончания"
              prepend-icon="event"
              readonly
            ></v-text-field>
            <v-date-picker v-model="item.dateEnd" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn flat color="primary" @click="this.menuDateEnd = false">Cancel</v-btn>
              <v-btn flat color="primary" @click="$refs.dateEnd.save(item.dateEnd)">OK</v-btn>
            </v-date-picker>
          </v-menu>

          <v-text-field label="Сумма"
                        v-model="item.sum"
                        prepend-icon="money"
                        :rules="rules"
                        required
                        color="light-blue lighten-1">
          </v-text-field>

          <v-select label="Дворник"
                    color="light-blue lighten-1"
                    v-model="item.wiper"
                    prepend-icon="rowing"
                    :items="wiperList"
                    item-text="name"
                    item-value="_id"
                    single-line>
          </v-select>

          <v-select label="Адрес"
                    color="light-blue lighten-1"
                    v-model="item.address"
                    prepend-icon="place"
                    :items="addressList"
                    item-text="name"
                    item-value="_id"
                    single-line>
          </v-select>

          <v-select label="Тип"
                    color="light-blue lighten-1"
                    v-model="item.type"
                    prepend-icon="poll"
                    :items="type"
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
  import Work from '@/components/pages/Work';
  const cleaningManagerAPI = `http://${window.location.hostname}:3001`;
  export default {
    props:['addressList','wiperList'],
    components: {
      'app-modal': modal,
    },
    data() {
      return {
        snackbar: false,
        itemAdd: false,
        rules: [value => !!value || 'Обязательное поле'],
        companyId: '',
        date: null,
        modal: false,
        menuDateStart: false,
        menuDateEnd: false,
        type:['Штраф','Препия','Зп'],
        item: {},
        message: ''
      };
    },
    methods: {
      addItem: function(){
        debugger;
        Work.add(this, this.item);
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
