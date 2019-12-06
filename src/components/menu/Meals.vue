<template>
  <b-container>
    <b-jumbotron header="Here's our menu" lead="Check out our meals">
    </b-jumbotron>
    <b-card-group>
      <b-row>
        <b-col
          v-for="meal in meals"
          :key="meal.id"
        >
        <b-card
        :title="meal.name"
        img-top
        class="meal-card overflow-hidden"
        style="width: 20rem;"
        :img-src="meal.iconPath"
        >
          <b-row>
            <b-col>
              <b-card-text>${{ meal.price}}: {{ meal.description }}</b-card-text>
              <b-button
              class="meal-button"
              >Order</b-button>
            </b-col>
          </b-row>
        </b-card>
        </b-col>
      </b-row>
    </b-card-group>
  </b-container>
</template>

<script>

export default {
  data: () => {
    return {
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
          'name': 'Pizza',
          'iconPath': require('@/assets/imgs/pizza.jpg'),
          'description': 'delicious pizza',
          'price': 10.0
        },
        {
          'id': 2,
          'name': 'Croissant',
          'iconPath': require('@/assets/imgs/croissant.jpg'),
          'description': 'hard to pronounce',
          'price': 3.5
        }
      ]
    }
  }
}
</script>

<style scoped>
.meal-card{
  transition: filter 0.5s
}
.meal-card:hover{
  filter: drop-shadow(0 0 0.75rem grey);
}
</style>
