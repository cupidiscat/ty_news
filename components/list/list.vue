<template>
	<swiper class="swiper" @change="change" :current="showIndex">
		<swiper-item 
		class="swiper-item"
		v-for="(item, index) in list"
		:key="item.id"
		>
			<list-item :list="listData[index]" :loadObj="load[index]" @loadmore="loadmore"></list-item>
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
				this.getList(0)
			},
			showIndex(newValue) {
				const list = this.listData[newValue];
				if(!list || list.length === 0) {
					this.getList(newValue)
				}
			}
		},
		methods: {
			change(event) {
				// console.log(event)
				const { current } = event.detail
				this.$emit("change", current)
			},
			getList(index) {
				// console.log(this.list)
				let obj = this.load[this.showIndex]
				if(obj && obj.loading === "noMore") {
					return
				}
				if(!obj) {
					obj = {
						pageNum: 1,
						loading: "loading"
					}
				}
				const { name } = this.list[index]
				this.$api.get_list({
					name,
					page: obj.pageNum,
					pageSize: this.pageSize
				}).then(res => {
					console.log(res)
					const newData = res.data;
					if(newData.length < this.pageSize) {
						obj.loading = "noMore"
					}
					const oldData = this.listData[this.showIndex] || []
					oldData.push(...newData)
					this.$set(this.load, index, obj)
					// 强制渲染页面
					// this.$forceUpdate()
					this.$set(this.listData, index, oldData)
				})
			},
			loadmore() {
				console.log("加载更多")
				let obj = this.load[this.showIndex]
				obj.pageNum++
				this.getList(this.showIndex)
			}
		},
		created() {
			// this.getList(0)
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
