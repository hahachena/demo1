import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultCity = '上海'

const state = {
    city:'上海'
}
const mutations = {
    changeCity(){
        alert('dd')

    }
}

export default new Vuex.Store({
    state,
    mutations,
})