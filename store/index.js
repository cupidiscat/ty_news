import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		historyLists: uni.getStorageSync("__historyLists") || []
	},
	mutations: {
		SET_HISTORY_LISTS(state, history) {
			state.historyLists = history
		}
	},
	actions: {
		addHistoryList({commit, state}, history) {
			let list = state.historyLists
			list.unshift(history)
			uni.setStorageSync("__historyLists", list)
			commit("SET_HISTORY_LISTS", list)
		}
	}
})

export default store