<template>
  <div class="l-auth-container">
    <div class="l-auth">
      <v-form v-model="wiperAdd">
        <v-text-field label="WiperName"
                      v-model="wipers.name"
                      prepend-icon="account_box"
                      :rules="rules"
                      required
                      color="light-blue lighten-1">
        </v-text-field>

        <v-text-field label="Phone"
                      v-model="wipers.phone"
                      prepend-icon="phone"
                      :rules="rules"
                      color="light-blue lighten-1"
                      required>
        </v-text-field>

        <v-btn color="light-blue lighten-1" @click.native="addWiper()">Добавить</v-btn>
      </v-form>
    </div>

    <!-- <v-snackbar timeout="6000"
                bottom="bottom"
                color="red lighten-1"
                v-model="snackbar">
      {{ message }}
    </v-snackbar> -->
  </div>
</template>

<script>
import AddWipers from "@/components/pages/Wipers";
export default {
  data() {
    return {
		snackbar: false,
		wiperAdd:false,
      rules: [value => !!value || "This field is required"],
      wipers: {
        name: "",
        phone: ""
      },
      message: ""
    };
  },
  methods: {
    addWiper() {
		AddWipers.add(this, this.wipers, "/");
    }
  }
};
</script>
<style lang="scss">
  @import "./../../assets/styles";
.l-auth {
  background-color: $background-color;
  padding: 15px;
  margin: 45px auto;
  min-width: 272px;
  max-width: 320px;
  animation: bounceIn 1s forwards ease;
}
.l-signup {
  background-color: $background-color;
  padding: 15px;
  margin: 45px auto;
  min-width: 272px;
  max-width: 320px;
  animation: slideInFromLeft 1s forwards ease;
}
</style>
