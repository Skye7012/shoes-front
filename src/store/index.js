import { createStore } from 'vuex'
import shoes from '@/store/modules/shoes'
import brands from '@/store/modules/brands'
import destinations from '@/store/modules/destinations'
import seasons from '@/store/modules/seasons'
import user from '@/store/modules/user'

export default createStore({
  modules: {
    shoes,
    brands,
    destinations,
    seasons,
    user
  }
})
