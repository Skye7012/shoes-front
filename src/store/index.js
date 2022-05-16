import { createStore } from 'vuex'
import shoes from '@/store/modules/shoes'
import brands from '@/store/modules/brands'
import destinations from '@/store/modules/destinations'
import seasons from '@/store/modules/seasons'
import userModule from '@/store/modules/userModule'
import basket from '@/store/modules/basket'
import sizes from '@/store/modules/sizes'

export default createStore({
  modules: {
    shoes,
    brands,
    destinations,
    seasons,
    userModule,
    basket,
    sizes,
  }
})
