<template>
  <div>
    <app-modal @closeModal="closeModal">
      <div class="l-auth-container">
        <div class="l-auth">
          <v-form>
            <v-menu
              ref="dateStart"
              :close-on-content-click="false"
              v-model="dateStart"
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
                v-model="startPeriod"
                label="Дата начала"
                prepend-icon="event"
                readonly
              ></v-text-field>
              <v-date-picker v-model="startPeriod" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn flat color="primary" @click="this.dateStart = false">Cancel</v-btn>
                <v-btn flat color="primary" @click="$refs.dateStart.save(startPeriod)">OK</v-btn>
              </v-date-picker>
            </v-menu>

            <v-menu
              ref="dateEnd"
              :close-on-content-click="false"
              v-model="dateEnd"
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
                v-model="endPeriod"
                label="Дата окончания"
                prepend-icon="event"
                readonly
              ></v-text-field>
              <v-date-picker v-model="endPeriod" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn flat color="primary" @click="this.dateEnd = false">Cancel</v-btn>
                <v-btn flat color="primary" @click="$refs.dateEnd.save(endPeriod)">OK</v-btn>
              </v-date-picker>
            </v-menu>
            <v-btn color="light-blue lighten-1" @click.native="calculate()">Рассчитать</v-btn>
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
    components: {
      'app-modal': modal,
    },
    data() {
      return {
        snackbar: false,
        rules: [value => !!value || 'Обязательное поле'],
        date: null,
        modal: false,
        dateEnd: false,
        dateStart: false,
        startPeriod: '',
        endPeriod: '',
        message: '',
      };
    },
    methods: {
      calculate: function(){
        Work.calculate(this, {
          dateStart: this.startPeriod,
          dateEnd: this.endPeriod
        })
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
