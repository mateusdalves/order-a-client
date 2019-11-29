<template>
  <b-carousel
    id="carousel-fade"
    style="text-shadow: 1px 1px 2px #333"
    :interval="4000"
    fade
    indicators
    img-width="1280"
    img-height="480"
    background="#ababab"
    @sliding-start="onSlideStart"
    @sliding-end="onSlideEnd"
  >
    <b-carousel-slide
    v-for="banner in banners"
    :key="banner.id"
    :caption="banner.description"
    :img-src="banner.imgPath"
    >
    </b-carousel-slide>
  </b-carousel>
</template>

<script>
export default {
  data: () => {
    return {
      'model': 0,
      'cycle': true,
      'meals': [
        {
          'id': 0,
          'name': 'Hamburguer',
          'iconPath': require('@/assets/imgs/hamburguer.jpg'),
          'description': 'A tasty burguer',
          'price': 5.0
        },
        {
          'id': 1,
          'name': 'pizza',
          'iconPath': require('@/assets/imgs/pizza.jpg'),
          'description': 'delicious pizza',
          'price': 10.0
        },
        {
          'id': 2,
          'name': 'croissant',
          'iconPath': require('@/assets/imgs/croissant.jpg'),
          'description': 'hard to pronounce',
          'price': 3.5
        }
      ],
      'banners': [
        {
          'id': 0,
          'name': 'Veggie',
          'imgPath': require('@/assets/banners/veggie-banner.jpg'),
          'description': 'We serve for all kinds of tastes'
        },
        {
          'id': 1,
          'name': 'Tacos',
          'imgPath': require('@/assets/banners/tacos-banner.png'),
          'description': 'We might have something for you too!'
        }
      ],
      methods: {
        onSlideStart (slide) {
          this.sliding = true
        },
        onSlideEnd (slide) {
          this.sliding = false
        }
      }
    }
  }
}
</script>

<style scoped>
</style>
