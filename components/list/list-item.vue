<template>
	<list-scroll class="scroll" @loadmore="loadmore">
		<list-card v-for="item in list" :model="item" :key="item.id"></list-card>
		<uni-load-more iconType="snow" status="loading"></uni-load-more>
	</list-scroll>
</template>

<script>
	import listScroll from '../list-scroll/list-scroll.vue'
	import listCard from '../list-card/list-card.vue'
	import uniLoadMore from "../uni-load-more/uni-load-more.vue"
	
	export default {
		data() {
			return {
				
			}
		},
		props: {
			list: {
				type: Array,
				default() {
					return []
				}
			}
		},
		components: {
			listScroll,
			listCard,
			uniLoadMore
		},
		methods: {
			loadmore() {
				this.$emit("loadmore")
			}
		}
	}
</script>

<style lang="scss">
	
	.scroll {
		height: 100%;
		box-sizing: border-box;
	}
	
</style>
