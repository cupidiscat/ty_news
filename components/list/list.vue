<template>
	<swiper class="swiper" @change="change" :current="showIndex">
		<swiper-item 
		class="swiper-item"
		v-for="(item, index) in list"
		:key="item.id"
		>
			<list-item :list="listData[index]" @loadmore="loadmore"></list-item>
		</swiper-item>
	</swiper>
</template>

<script>
	import listItem from './list-item.vue'
	export default {
		data() {
			return {
				listData:{},
				load: {},
				pageSize: 5
			}
		},
		components: {
			listItem
		},
		props: {
			list: {
				type: Array,
				default() {
					return []
				}
			},
			showIndex: {
				type: Number,
				default: 0
			}
		},
		watch: {
			list(newValue) {
				if(newValue.length === 0) return
				this.getList(0)
			}
		},
		methods: {
			change(event) {
				// console.log(event)
				const { current } = event.detail
				this.$emit("change", current)
				this.getList(current)
			},
			getList(index) {
				const data = this.listData[index]
				if(data && data.length > 0) return
				const { name } = this.list[index]
				this.$api.get_list({
					name: name
				}).then(res => {
					console.log(res)
					// this.listData = res.data
					this.$set(this.listData, index, res.data)
				})
			},
			loadmore() {
				console.log("加载更多")
			}
		},
		created() {
			
		}
	}
</script>

<style lang="scss">
	
	.swiper {
		height: 100%;
		// background-color: #007AFF;
		.swiper-item {
			width: 100%;
			height: 100%;
		}
	}
	
</style>
