<template>
	<div class="hello">
		<h1>
			<div>{{nickname}}</div>
			<div>{{age}}</div>
			<hr>
		</h1>
	</div>
</template>

<script>
	export default {
		computed: {
			age() {
				return this.$store.state.age
			},
			nickname() {
				return this.$store.state.nickname
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
