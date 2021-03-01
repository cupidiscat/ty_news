<template>
	<view class="scroll">
		<scroll-view scroll-y="true" class="list-scroll">
			<view>
				<slot></slot>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	
	.scroll {
		width: 100%;
		height: 100%;
		overflow: hidden;
		box-sizing: border-box;
		border: 1px solid #ff0000;
		.list-scroll {
			width: 100%;
			height: 100%;	
		}
	}

</style>
