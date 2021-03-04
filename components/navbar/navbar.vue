<template>
	<view>
		<view class="navbar_fix">
			<!-- 状态栏 -->
			<view class="navbar_status" :style="{height: statusBarHeight+'px'}"></view>
			<!-- 搜索框 -->
			<view class="navbar_content" :class="{search:hasBackIcon}" :style="{height: contentHeight+'px', width: searchWidth+'rpx'}">
				<view v-if="hasBackIcon" class="navbar_back_icon" @click="toBack">
					<uni-icons type="back" color="#fff" size="20"></uni-icons>
				</view>
				<view v-if="!hasBackIcon" class="navbar_content_search" @click="toSearchPage" >
					<view class="navbar_content_search_icon iconfont icon-search"></view>
					<view class="navbar_content_search_text">uni-app vue</view>
				</view>
				<view v-else class="navbar_content_search">
					<input class="navbar_content_search_text" type="text" value="" placeholder="请输入您要搜索的内容" />
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
		props: {
			hasBackIcon: {
				type: Boolean,
				default: false
			}
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
		},
		methods: {
			toSearchPage() {
				console.log("跳转")
				uni.navigateTo({
					url: "/pages/home-search/home-search"
				})
			},
			toBack() {
				uni.navigateBack()
			}
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
		z-index: 99;
		.navbar_status {
			
		}
		.navbar_content {
			padding: 0 15rpx;
			display: flex;
			align-items: center;
			
			.navbar_content_search {
				flex: 1;
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

		.search {
			padding-left: 0;
			.navbar_back_icon {
				width: 60rpx;
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
			}
			.navbar_content_search {
				border-radius: 10rpx;
				.navbar_content_search_text {
					width: 100%;
				}
			}
		}
	}
	
	
</style>
