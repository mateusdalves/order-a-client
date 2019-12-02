<template>
  <b-container>
    <b-card-group>
      <b-row>
        <b-col
        v-for="meal in meals"
        :key="meal.id"
        md="6"
        >
        <b-card
        :header="meal.name"
        no-body class="overflow-hidden" style="max-width: 540px;"
        >
          <b-card-img :src="meal.iconPath" class="rounded-0"></b-card-img>
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
      ]
    }
  }
}
</script>
