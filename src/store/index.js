import { createStore } from 'vuex'
import shoes from '@/store/modules/shoes'
import brands from '@/store/modules/brands'

export default createStore({
  modules: {
    shoes,
    brands
  }
})
