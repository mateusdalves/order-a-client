<template>
  <b-container>
    <div>
      {{ meals }}
    </div>
  </b-container>
</template>

<script>
const axios = require('axios')

export default {
  data: () => {
    return {
      'meals': [],
      'errors': []
    }
  },
  async created () {
    axios
      .get('http://www.mocky.io/v2/5de9803631000029ac6b1974')
      .then(response => {
        this.meals = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>
