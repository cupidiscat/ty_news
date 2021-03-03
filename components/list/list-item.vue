<template>
	<list-scroll class="scroll" @loadmore="loadmore">
		<list-card v-for="(item, index) in list" :model="item" :key="index"></list-card>
		<uni-load-more v-if="list.length > 3" iconType="snow" :status="getLoadingStatus"></uni-load-more>
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
			},
			loadObj: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		watch: {
			// loadObj(newValue) {
			// 	console.log(newValue)
			// }
		},
		components: {
			listScroll,
			listCard,
			uniLoadMore
		},
		created() {
			
		},
		mounted() {
			
		},
		methods: {
			loadmore() {
				this.$emit("loadmore")
			},
		},
		computed: {
			getLoadingStatus() {
				if(this.loadObj && this.loadObj.loading) {
					return this.loadObj.loading
				} else {
					return "loading"
				}
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
