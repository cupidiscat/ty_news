<template>
	<view class="home">
		<navbar></navbar>
		<tab :list='labelList' @clickItem='clickItem' :showIndex='showIndex'></tab>
		<view class="list_item">
			<list :list='labelList' @change='change' :showIndex='showIndex'></list>
		</view>
		<!-- <scroll-view scroll-y class="scroll">
			<view class="scroll_content">
				<view v-for="item in 100" :key="item" class="scroll_content_item">
					{{item}} 的内容
				</view>
			</view>
		</scroll-view> -->
	</view>
</template>

<script>
	import tab from '../../../components/tab/tab.vue'
	import list from '../../../components/list/list.vue'
	
	export default {
		data() {
			return {
				labelList: [],
				showIndex: 0
			}
		},
		components: {
			tab,
			list
		},
		onLoad() {
			this.getLabel()
		},
		methods: {
			getLabel() {
				this.$api.get_label({
					url: 'get_label'
				}).then(res => {
					console.log(res)
					this.labelList = res.data
				})
				// this.$http({
				// 	url: 'get_label'
				// }).then(res => {
				// 	console.log(res)
				// })
			},
			clickItem(item, index) {
				console.log(item, index)
				this.showIndex = index
			},
			change(current) {
				// console.log('index.vue中的数字',current)
				this.showIndex = current
			}
		}
	}
</script>

<style lang="scss">
	
	page {
		height: 100%;
		width: 100%;
		display: flex;
	}
	
	.home {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		
		.list_item {
			height: 100%;
			width: 100%;
			// border: 1px solid #ff0000;
			box-sizing: border-box;
		}
		
		// .scroll {
		// 	height: 100%;
		// 	overflow: hidden;
		// 	.scroll_content {
		// 		height: 100%;
		// 	}
		// }
	}

	
</style>
