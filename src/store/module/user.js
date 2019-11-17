const state = {
	userInfo: {
		age: 0,
		nickname: ''
	},
	age: 24,
	price: 100
}

const getters = { //利用已有属性计算出一个新的属性
	priceUSA(state) {
		return (state.price / 7).toFixed(2)
	}
}

const mutations = { //commit
	addAge(state, payload) {
		state.userInfo.age += payload
	},
	SETINFO(state, info) {
		state.userInfo = info
	}
}

const actions = { //dispatch
	async getInfo({
		commit,
		dispatch
	}) {
		// let token=await dispatch('getToken');//可以提交其他actions
		commit('SETINFO', {
			nickname: '小明',
			age: 24
		});
	},

	// async getToken({commit}){
	// 	let res=await axios.get('user/getToken')
	// },
}
export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}
