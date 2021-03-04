<template>
	<view class="tab">
		<scroll-view scroll-x class="tab_list">
			<view class="tab_list_box">
				<view class="tab_list_item" 
				:class="{active: currentIndex === index}" 
				v-for="(item, index) in list"
				@click="clickItem(index, item)"
				>
					{{item.name}}
				</view>
			</view>
		</scroll-view>
		<view class="tab_shezhi">
			<view 
			class="tab_shezhi_icon iconfont icon-shezhi"
			@click="itemClick"
			>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currentIndex: 0
			};
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
			showIndex(newValue, oldValue) {
				this.currentIndex = newValue
			}
		},
		methods: {
			clickItem(index, item) {
				this.currentIndex = index;
				this.$emit("clickItem", item, index)
			},
			itemClick() {
				uni.navigateTo({
					url: "/pages/home-label/home-label"
				})
			}
		}
	}
</script>

<style lang="scss">
	
	.tab {
		background-color: #FFFFFF;
		border-bottom: 1rpx solid #eeeeee;
		display: flex;
		.tab_list {
			flex: 1;
			height: 90rpx;
			overflow: hidden;
			.tab_list_box {
				display: flex;
				flex-wrap: nowrap;
				.tab_list_item {
					flex-shrink: 0;
					height: 90rpx;
					line-height: 90rpx;
					text-align: center;
					padding: 0 15rpx;
					font-size: 30rpx;
					color: #333333;
				}
				.active {
					color: $them-color;
				}
			}
		}
		.tab_shezhi {
			position: relative;
			width: 100rpx;
			height: 90rpx;
			line-height: 90rpx;
			text-align: center;
			font-size: 50rpx;
			color: #333333;
			
			&::before {
				content: "";
				position: absolute;
				top: 20rpx;
				left: 0;
				bottom: 20rpx;
				width: 1rpx;
				background-color: #dddddd;
			}
		}
	}

</style>
