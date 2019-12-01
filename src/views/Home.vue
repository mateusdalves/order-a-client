<template>
  <div>
    <Header></Header>
    <Body></Body>
  </div>
</template>

<script>
import Body from '@/components/home/Body.vue'
import Header from '@/components/home/Header.vue'

export default {
  name: 'home',
  components: {
    Header,
    Body
  }
}
</script>
