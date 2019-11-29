<template>
  <header class="bar">
    <b-container>
      <b-row>
        <b-col>
          <b-navbar
          type="light"
          toggleable="sm"
          >
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-brand to="home">
                <img src="@/assets/logo.png">
              </b-navbar-brand>
                <b-navbar-nav
                fill
                align="right"
                class="m-10"
                >
                  <b-nav-item
                  v-for="menuItem in menuItems"
                  :key="menuItem.id"
                  :to="menuItem.route"
                  class="pl-4 pr-4"
                  >
                    <img
                    :src="menuItem.iconPath"
                    height="20px"
                    width="20px"
                    class="d-inline-block align-center">
                    <b-nav-text class="pl-2" style="font-size:17px;">
                    {{ menuItem.name }}
                    </b-nav-text>
                  </b-nav-item>
                </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </b-col>
      </b-row>
    </b-container>
  </header>
</template>

<script>
export default {
  data: () => {
    return {
      'menuItems': [
        {
          'id': 0,
          'name': 'Home',
          'route': 'home',
          'iconPath': require('@/assets/icons/home.png')
        },
        {
          'id': 1,
          'name': 'Our Menu',
          'route': 'menu',
          'iconPath': require('@/assets/icons/menu.png')
        },
        {
          'id': 2,
          'name': 'Order',
          'route': 'order',
          'iconPath': require('@/assets/icons/order.png')
        },
        {
          'id': 3,
          'name': 'About',
          'route': 'about',
          'iconPath': require('@/assets/icons/about.png')
        }
      ]
    }
  }
}
</script>

<style scoped>
.bar{
  width:100%;
  background-color: white;
}
</style>
