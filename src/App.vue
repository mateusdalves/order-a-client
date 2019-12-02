<template>
  <div>
    <Header></Header>
    <!-- <Body></Body> -->
    <router-view/>
    <b-footer
      color="indigo"
      app
    >
    <span class="white--text">&copy; 2019 Order-A</span>
    </b-footer>
  </div>
</template>

<script>
import Header from '@/components/home/Header.vue'
// import Body from '@/components/home/Body.vue'

export default {
  name: 'app',
  props: {
    source: String
  },
  components: {
    Header
    // Body
  },
  data: () => ({
    drawer: null
  })
}
</script>
