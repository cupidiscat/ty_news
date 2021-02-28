<template>
	<view>
		<view class="navbar_fix">
			<!-- 状态栏 -->
			<view class="navbar_status" :style="{height: statusBarHeight+'px'}"></view>
			<!-- 搜索框 -->
			<view class="navbar_content" :style="{height: contentHeight+'px', width: searchWidth+'rpx'}">
				<view class="navbar_content_search" >
					<view class="navbar_content_search_icon iconfont icon-search"></view>
					<view class="navbar_content_search_text">uni-app vue</view>
				</view>
			</view>
		</view>
		<view :style="{height: (statusBarHeight + contentHeight)+'px'}"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				statusBarHeight: 0,
				contentHeight: 45,
				searchWidth: 720
			};
		},
		created() {
			//获取导航栏的高度
			const info = uni.getSystemInfoSync()
			this.statusBarHeight = info.statusBarHeight
			
			// #ifndef APP-NVUE || H5
			//获取右边那个 按钮的信息
			const menuButtonInfo = uni.getMenuButtonBoundingClientRect()
			this.contentHeight = (menuButtonInfo.bottom - this.statusBarHeight) + (menuButtonInfo.top - this.statusBarHeight)
			this.searchWidth = 750 - menuButtonInfo.left
			// #endif
		}
	}
</script>

<style lang="scss">
	.navbar_fix {
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		background-color: $them-color;
		width: 100%;
		box-sizing: border-box;
		.navbar_status {
			
		}
		.navbar_content {
			padding: 0 15rpx;
			display: flex;
			align-items: center;
			.navbar_content_search {
				width: 100%;
				padding: 0 30rpx;
				background-color: #ffffff;
				height: 32px;
				border-radius: 30px;
				display: flex;
				align-items: center;
				.navbar_content_search_icon {
					margin-right: 20rpx;	
				}
				.navbar_content_search_text {
					font-size: 30rpx;
					color: #999;
				}
			}
		}
	}
	
	
</style>
