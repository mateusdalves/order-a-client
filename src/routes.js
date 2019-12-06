import Home from '@/views/Home.vue'
import Menu from '@/views/Menu.vue'
import About from '@/views/About.vue'
import Order from '@/views/Order.vue'
import Adm from '@/views/Adm.vue'

export default [{
  path: '/',
  name: 'home',
  component: Home
},
{
  path: '/menu',
  name: 'item-menu',
  component: Menu
},
{
  path: '/about',
  name: 'about',
  component: About
},
{
  path: '/order',
  name: 'order',
  component: Order
},
{
  path: '/adm',
  name: 'adm',
  component: Adm
}
]
