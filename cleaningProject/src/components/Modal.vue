<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <slot></slot>
          <!--<div class="l-auth-container">-->
            <!--<div class="l-auth">-->
              <!--<v-form v-model="validLogin">-->
                <!--<v-text-field label="Username"-->
                              <!--v-model="credentials.username"-->
                              <!--prepend-icon="account_box"-->
                              <!--:rules="rules"-->
                              <!--required-->
                              <!--color="light-blue lighten-1">-->
                <!--</v-text-field>-->

                <!--<v-text-field label="Password"-->
                              <!--v-model="credentials.password"-->
                              <!--prepend-icon="lock"-->
                              <!--:rules="rules"-->
                              <!--:append-icon="loginPasswordVisible ? 'visibility' : 'visibility_off'"-->
                              <!--:append-icon-cb="() => (loginPasswordVisible = !loginPasswordVisible)"-->
                              <!--:type="loginPasswordVisible ? 'text' : 'password'"-->
                              <!--color="light-blue lighten-1"-->
                              <!--required>-->
                <!--</v-text-field>-->

                <!--<v-btn flat color="light-blue lighten-1" @click.native="signUpVisible = true">Create account</v-btn>-->
                <!--<v-btn color="light-blue lighten-1" @click.native="submitAuthentication()">Login</v-btn>-->
              <!--</v-form>-->
            <!--</div>-->

            <!--<div class="l-signup" v-if="signUpVisible">-->
              <!--<v-form v-model="validSignUp">-->
                <!--<v-text-field label="Username"-->
                              <!--v-model="newUser.username"-->
                              <!--prepend-icon="account_box"-->
                              <!--:rules="rules"-->
                              <!--required-->
                              <!--color="light-blue lighten-1">-->
                <!--</v-text-field>-->

                <!--<v-text-field label="Password"-->
                              <!--v-model="newUser.password"-->
                              <!--prepend-icon="lock"-->
                              <!--:rules="rules"-->
                              <!--:append-icon="signUpPasswordVisible ? 'visibility' : 'visibility_off'"-->
                              <!--:append-icon-cb="() => (signUpPasswordVisible = !signUpPasswordVisible)"-->
                              <!--:type="signUpPasswordVisible ? 'text' : 'password'"-->
                              <!--color="light-blue lighten-1"-->
                              <!--required>-->
                <!--</v-text-field>-->

                <!--<v-btn block color="light-blue lighten-1" @click.native="submitSignUp()">Sign Up</v-btn>-->
              <!--</v-form>-->
            <!--</div>-->

            <!--<v-snackbar timeout="6000"-->
                        <!--bottom="bottom"-->
                        <!--color="red lighten-1"-->
                        <!--v-model="snackbar">-->
              <!--{{ message }}-->
            <!--</v-snackbar>-->
          <!--</div>-->
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'modal-window'
  };
</script>

<style scoped>
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    width: 300px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }

  .modal-header h3 {
    margin-top: 0;
    color: #42b983;
  }

  .modal-body {
    margin: 20px 0;
  }

  .modal-default-button {
    float: right;
  }

  /*
   * The following styles are auto-applied to elements with
   * transition="modal" when their visibility is toggled
   * by Vue.js.
   *
   * You can easily play with the modal transition by editing
   * these styles.
   */

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
</style>
