<template>
	<div class="hello">
		<h1>
			<div>{{userInfo.nickname}}--{{priceUSA}}</div>
			<div>{{userInfo.age}}</div>
			<button @click="addAge(2)">测试</button>
			<hr>
		</h1>
	</div>
</template>

<script>
	import {
		createNamespacedHelpers
	} from 'vuex'
	let {
		mapState,
		mapGetters,
		mapMutations,
		mapActions
	} = createNamespacedHelpers('user')
	export default {
		computed: {
			...mapGetters(['priceUSA']),
			...mapState(['userInfo', 'age'])
			// ...mapState({//加了命名空间就不用了在写成函数的形式了
			// 	userInfo: state => state.userInfo
			// })
		},
		created() {
			this.getInfo()
		},
		methods: {
			...mapActions(['getInfo']),
			...mapMutations(['addAge'])
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
