<template>
  <main class="l-home-page">
    <app-header></app-header>

    <div class="l-home">
      <h4 class="white--text text-xs-center my-0">
        Focus cleaning Manager
      </h4>

      <cleaning-list>
        <cleaning-list-header slot="cleaning-list-header"></cleaning-list-header>
        <cleaning-list-body slot="cleaning-list-body" :wipers="wipers"></cleaning-list-body>
      </cleaning-list>
    </div>
  </main>
</template>

<script>
import Axios from "axios";
import Authentication from "@/components/pages/Authentication";
import cleaningListHeader from "./../cleaning/cleaningListHeader";
import cleaningListBody from "./../cleaning/cleaningListBody";
const cleaningManagerAPI = `http://${window.location.hostname}:3001`;
export default {
  components: {
    "cleaning-list-header": cleaningListHeader,
    "cleaning-list-body": cleaningListBody
  },
  data() {
    return {
      wipers: []
    };
  },
  mounted() {
    this.getAllcleanings();
  },
  methods: {
    getAllcleanings() {
      Axios.get(`${cleaningManagerAPI}/api/v1/wipers`, {
        headers: {
          Authorization: Authentication.getAuthenticationHeader(this)
        },
        params: { user_id: this.$cookie.get("user_id") }
      }).then(({ data }) => (this.wipers = data));
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./../../assets/styles";
.l-home {
  background-color: $background-color;
  margin: 25px auto;
  padding: 15px;
  min-width: 272px;
}
</style>