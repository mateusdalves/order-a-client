<template>
  <v-app id="inspire">
    <Header> </Header>
    <Body> </Body>
    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import Header from '@/components/home/Header.vue'
import Body from '@/components/home/Body.vue'

export default {
  name: 'app',
  props: {
    source: String
  },
  components: {
    Header,
    Body
  },
  data: () => ({
    drawer: null
  })
}
</script>
