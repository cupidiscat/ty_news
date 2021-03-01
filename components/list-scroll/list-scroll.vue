<template>
	<scroll-view class="scroll" scroll-y="true" @scrolltolower="loadmore" >
		<view class="content">
			<slot></slot>
		</view>
	</scroll-view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
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
		.content {
			height: 100%;
			box-sizing: border-box;
		}
	}
	
</style>
