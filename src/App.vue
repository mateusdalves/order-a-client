<template>
  <div>
    <Header></Header>
    <!-- <Body></Body> -->
    <router-view/>
    <footer class="main-footer">
    <span>&copy; 2019 Order-A</span>
    </footer>
  </div>
</template>

<script>
import Header from '@/components/home/Header.vue'

export default {
  name: 'app',
  props: {
    source: String
  },
  components: {
    Header
  },
  data: () => ({
    drawer: null
  })
}
</script>

<style scoped>
.main-footer  {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: rgba(0,0,0,0);
  text-align: center;
}
</style>
