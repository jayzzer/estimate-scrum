<template>
  <v-app>
    <Header/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue';

@Component({
  components: { Header },
})
export default class App extends Vue {
}
</script>

<style lang="sass">
a
  text-decoration: none
</style>
