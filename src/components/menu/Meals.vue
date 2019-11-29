<template>
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
</template>

<script>
export default {
  data: () => {

  }
}
</script>
