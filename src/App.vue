<template>
  <v-app>
    <v-main>
      <Header />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Header from '@/components/NavBar.vue'

export default {
  components: {
    Header
  },
  name: 'App',
}
</script>
