import Vue from 'vue'
import Vuex from 'Vuex'
import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'
import state from './state'

Vue.use(Vuex)

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations
})