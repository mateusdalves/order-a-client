<template>
  <div>
    <Header></Header>
    <!-- <Body></Body> -->
    <router-view/>
    <footer>
    <span class="white--text">&copy; 2019 Order-A</span>
    </footer>
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
