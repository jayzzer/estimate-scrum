<template>
  <v-app-bar app color="amber darken-2">
    <div class="d-flex align-center">
      <router-link to="/">
        <h1 class="white--text">Scrum</h1>
      </router-link>
    </div>

    <v-spacer></v-spacer>

    <v-btn to="/description">Описание</v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
}
</script>

<style scoped>

</style>
