<template>
	<list-scroll class="list-scroll">
		<list-card mode="base"></list-card>
		<list-card mode="column"></list-card>
		<!-- <list-card mode="image"></list-card> -->
	</list-scroll>
</template>

<script>
	import listScroll from '../list-scroll/list-scroll.vue'
	import listCard from '../list-card/list-card.vue'
	
	export default {
		comments: {
			listScroll,
			listCard
		}
	}
</script>

<style lang="scss">
	
	.list-scroll {
		height: 100%;
	}
	
</style>
