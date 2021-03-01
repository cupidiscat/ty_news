<template>
	<view class="list">
		<!-- 普通模式 -->
		<view v-if="mode === 'base'" class="list-card">
			<view class="list-image">
				<image src="../../static/logo.png" mode=""></image>
			</view>
			<view class="list-content">
				<view class="list-content-title">
					<text>
						前端开发标题前端开发标题前端开发标题前端开发标题前端开发标题前端开发标题前端开发标题前端开发标题
					</text>
				</view>
				<view class="list-content-desc">
					<view class="list-content-des-tip">
						前端开发
					</view>
					<view>
						20阅读
					</view>
				</view>
			</view>
		</view>
		
		<!-- 多图的模式 -->
		<view v-if="mode === 'column'" class="list-card-multigraph">
			<view class="list-content-title">
				<text>
					前端开发标题前端开发标题前端开发标题前端开发标题前端开发标题前端开发标题前端开发标题前端开发标题
				</text>
			</view>
			<view class="list-image">
				<image src="../../static/logo.png" 
				mode="aspectFill"
				v-for="item in 3"
				>
				</image>
			</view>
			<view class="list-content-desc">
				<view class="list-content-des-tip">
					前端开发
				</view>
				<view>
					20阅读
				</view>
			</view>
		</view>
		
		<!-- 单图模式 -->
		<view v-if="mode === 'image'" class="list-card-singlegraph">
			<view class="list-image">
				<image src="../../static/logo.png" mode="aspectFill"></image>
			</view>
			<view class="list-content">
				<view class="list-content-title">
					<text>
						前端开发标题前端开发标题前端开发标题前端开发标题前端开发标题前端开发标题前端开发标题前端开发标题
					</text>
				</view>
				<view class="list-content-desc">
					<view class="list-content-des-tip">
						前端开发
					</view>
					<view>
						20阅读
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props: {
			mode: {
				type: String,
				default: 'base'
			}
		}
	}
</script>

<style lang="scss">
	
	// .list {
	// 	box-sizing: border-box;
	// }
	
	.list-card {
		margin: 30rpx;
		padding: 30rpx;
		box-shadow: 0 0 5px 1px rgba($color: #000000, $alpha: 0.1);
		display: flex;
		font-size: 14px;
		color: #333;
		font-weight: 400;
		line-height: 1.2;
		box-sizing: border-box;
		
		.list-image {
			flex-shrink: 0;
			width: 120rpx;
			height: 120rpx;
			border-radius: 10rpx;
			margin-right: 30rpx;
			
			image {
				width: 100%;
				height: 100%;
			}
		}
		
		.list-content {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			// background-color: #007AFF;
			flex: 1;
			
			.list-content-title {
				
				text {				
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
				}
			}
			
			.list-content-desc {
				display: flex;
				justify-content: space-between;
				align-items: center;
				
				.list-content-des-tip {
					border: 1px solid $them-color;
					color: $them-color;
					padding: 3px 5px;
					border-radius: 15px;
				}
				
			}
		}
		
	}
	
	.list-card-multigraph {		
		margin: 30rpx;
		padding: 30rpx;
		box-shadow: 0 0 5px 1px rgba($color: #000000, $alpha: 0.1);
		font-size: 14px;
		color: #333;
		font-weight: 400;
		line-height: 1.2;
		box-sizing: border-box;
		
		.list-content-title {
			
			text {				
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
			}
		}
		
		.list-image {
			display: flex;
			height: 140rpx;
			overflow: hidden;
			padding: 30rpx 0;
			
			image {
				width: 100%;
				height: 100%;
				margin-left: 20rpx;
				border-radius: 10rpx;
			}
			
			image:first-child {
				margin-left: 0rpx;
			}
		}
		
		.list-content-desc {
			display: flex;
			justify-content: space-between;
			align-items: center;
			
			.list-content-des-tip {
				border: 1px solid $them-color;
				color: $them-color;
				padding: 3px 5px;
				border-radius: 15px;
			}
			
		}
	}
	
	.list-card-singlegraph {
		margin: 30rpx;
		padding: 30rpx;
		font-size: 14px;
		color: #333;
		font-weight: 400;
		line-height: 1.2;
		box-shadow: 0 0 5px 1px rgba($color: #000000, $alpha: 0.1);
		box-sizing: border-box;
		
		.list-image {
			height: 200rpx;
			
			image {
				width: 100%;
				height: 100%;
				border-radius: 10rpx;
			}
		}
		
		.list-content {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			// background-color: #007AFF;
			flex: 1;
			
			.list-content-title {
				padding: 30rpx 0;
				text {				
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
				}
			}
			
			.list-content-desc {
				display: flex;
				justify-content: space-between;
				align-items: center;
				
				.list-content-des-tip {
					border: 1px solid $them-color;
					color: $them-color;
					padding: 3px 5px;
					border-radius: 15px;
				}
				
			}
		}
	}
	
</style>
