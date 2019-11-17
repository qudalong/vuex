<template>
	<div class="home">
		<aa />
		<bb />
	</div>
</template>

<script>
	// @ is an alias to /src
	// import A from '@/components/a.vue'
	// import B from '@/components/b.vue'
	import {
		aa,
		bb
	} from '@/components/index.js'

	export default {
		name: 'home',
		components: {
			aa,
			bb
		}
	}
</script>
