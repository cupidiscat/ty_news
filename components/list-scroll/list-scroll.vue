<template>
	<scroll-view class="scroll" scroll-y="true" >
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
