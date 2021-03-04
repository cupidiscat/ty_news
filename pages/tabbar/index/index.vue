<template>
	<view class="home">
		<navbar></navbar>
		<tab 
		:list="labelList" 
		@clickItem="clickItem"
		:showIndex="showIndex"
		></tab>
		<list 
		class="list" 
		:list="labelList"
		@change="change"
		:showIndex="showIndex"
		></list>
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
			uni.$on("labelChange", res => {
				// console.log("更新了")
				this.showIndex = 0
				this.getLabel()
			})
		},
		methods: {
			getLabel() {
				this.$api.get_label({
					url: 'get_label'
				}).then(res => {
					const { data } = res
					data.unshift({
						name: "全部"
					})
					// console.log(res)
					this.labelList = res.data
				})
			},
			clickItem(item, index) {
				// console.log(item)
				this.showIndex = index
			},
			change(currentIndex) {
				this.showIndex = currentIndex
			}
		}
	}
</script>

<style lang="scss">
	
	page {
		height: 100%;
	}
	
	.home {
		display: flex;
		flex-direction: column;
		height: 100%;
		.list {
			flex: 1;
			border: 1px solid #ff0000;
		}
	}
	
</style>
