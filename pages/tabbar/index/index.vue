<template>
	<view class="home">
		<navbar></navbar>
		<tab :list='list' @clickItem='clickItem'></tab>
	</view>
</template>

<script>
	import tab from '../../../components/tab/tab.vue'
	export default {
		data() {
			return {
				list: []
			}
		},
		components: {
			tab
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
					this.list = res.data
				})
				// this.$http({
				// 	url: 'get_label'
				// }).then(res => {
				// 	console.log(res)
				// })
			},
			clickItem(item) {
				console.log(item)
			}
		}
	}
</script>

<style lang="scss">
	
</style>
