<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-carousel
          :cycle="cycle"
        >
          <v-carousel-item
          v-for="banner in banners"
          :key="banner.id"
          :src="banner.imgPath"
          >
          <div class="description">
            {{ banner.description }}
          </div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <!-- New Div containing the Meals -->
    <v-container fluid>
      <v-row dense>
        <v-col
        v-for="meal in meals"
        :key="meal.id"
        >
          <v-hover v-slot:default="{ hover }">
            <v-card
            :elevation="hover ? 10 : 2"
            :loading="loading"
            class="mx-auto my-4"
            max-width="350"
            >
              <v-img
                height="250"
                :src="meal.iconPath"
              >
              </v-img>

                <v-card-title> {{ meal.name }} </v-card-title>

              <v-card-text>
                <v-row
                  align="center"
                  class="mx-0"
                >
                  <v-rating
                    :value="4.5"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                  ></v-rating>

                  <div class="grey--text ml-4">4.5 (413)</div>
                </v-row>

                <div class="my-4 subtitle-1 black--text">
                  $ {{ meal.price }}
                </div>

                <div>{{meal.description}}</div>
              </v-card-text>

              <v-divider class="mx-4"></v-divider>
              <v-card-actions>
                <v-btn
                  color="deep-purple accent-4"
                  text
                  @click="reserve"
                >
                  Order
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
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
      ]
    }
  }
}
</script>

<style scoped>
  .description{
    position: absolute;
    bottom: 50px;
    background-color: rgba(0,0,0,0.5);
    color: white;
    font-size: 2em;
    padding: 20;
  }
</style>
