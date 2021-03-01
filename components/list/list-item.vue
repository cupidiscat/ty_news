<template>
	<list-scroll class="scroll">
		<list-card mode="base"></list-card>
		<list-card mode="column"></list-card>
		<list-card mode="image"></list-card>
	</list-scroll>
</template>

<script>
	import listScroll from '../list-scroll/list-scroll.vue'
	import listCard from '../list-card/list-card.vue'
	
	export default {
		data() {
			return {
				
			}
		},
		components: {
			listScroll,
			listCard
		}
	}
</script>

<style lang="scss">
	
	.scroll {
		height: 100%;
		box-sizing: border-box;
	}
	
</style>
