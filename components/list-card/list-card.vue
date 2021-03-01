<template>
	<view class="card">
		<!-- 普通模式 -->
		<view v-if="mode === 'base'" class="normal-card">
			<view class="normal-card-image">
				<image src="../../static/logo.png" mode="aspectFill"></image>
			</view>
			<view class="normal-card-desc">
				<view class="normal-card-desc-title ellipsis2line">
					<text>文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题</text>
				</view>
				<view class="normal-card-desc-info">
					<view class="normal-card-desc-info-tip">
						前端开发
					</view>
					<view class="normal-card-desc-info-readnum">
						20阅读
					</view>
				</view>
			</view>
		</view>
		
		<!-- 多图模式 -->
		<view v-if="mode === 'column'" class="column-card">
			<view class="column-card-title">
				<text>文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题</text>
			</view>
			<view class="column-card-image">
				<image 
				src="../../static/logo.png" 
				mode="aspectFill"
				v-for="item in 3"
				:key="item"
				>
				</image>
			</view>
			<view class="column-card-desc">
				<view class="column-card-desc-tip">
					前端开发
				</view>
				<view class="column-card-desc-readnum">
					20阅读
				</view>
			</view>
		</view>
		
		<!-- 大图模式 -->
		<view v-if="mode === 'image'" class="image-card">
			<view class="image-card-image">
				<image src="../../static/logo.png" mode="aspectFill"></image>
			</view>
			<view class="image-card-desc">
				<view class="image-card-desc-title">
					<text>文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题</text>
				</view>
				<view class="image-card-desc-info">
					<view class="image-card-desc-info-tip">
						前端开发
					</view>
					<view class="image-card-desc-info-readnum">
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
				default: "base"
			}
		}
	}
</script>

<style lang="scss">
	
	.card {
		padding: 30rpx;
		font-size: 30rpx;
		color: #333333;
		font-weight: 400;
		line-height: 1.2;
	}
	
	.normal-card {
		padding: 30rpx;
		box-shadow: 0 0 5px 1px rgba($color: #000000, $alpha: 0.1);
		box-sizing: border-box;
		display: flex;
		
		.normal-card-image {
			width: 120rpx;
			height: 120rpx;
			image {
				width: 100%;
				height: 100%;
				border-radius: 10rpx;
			}
		}
		
		.normal-card-desc {
			margin-left: 20rpx;
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.normal-card-desc-title {
				// text {
				// 	overflow: hidden;
				// 	text-overflow: ellipsis;
				// 	display: -webkit-box;
				// 	-webkit-line-clamp: 2;
				// 	-webkit-box-orient: vertical;
				// }
			}
			
			.normal-card-desc-info {
				display: flex;
				justify-content: space-between;
				align-items: center;
				
				.normal-card-desc-info-tip {
					font-size: 24rpx;
					padding: 3px 5px;
					color: $them-color;
					border: 1px solid $them-color;
					border-radius: 3px;
				}
			}
		}
	}
	
	.column-card {
		padding: 30rpx;
		box-shadow: 0 0 5px 1px rgba($color: #000000, $alpha: 0.1);
		box-sizing: border-box;
		.column-card-title {
			text {
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
			}
		}
		
		.column-card-image {
			display: flex;
			height: 140rpx;
			padding: 30rpx 0;
			
			image {
				margin-left: 20rpx;
				width: 100%;
				height: 100%;
				border-radius: 10rpx;
			}
			
			image:nth-child(1) {
				margin-left: 0;
			}
		}
		
		.column-card-desc {
			display: flex;
			justify-content: space-between;
			align-items: center;
			.column-card-desc-tip {
				font-size: 24rpx;
				padding: 3px 5px;
				color: $them-color;
				border: 1px solid $them-color;
				border-radius: 3px;
			}
			.column-card-desc-readnum {
				
			}
		}
	}
	
	.image-card {
		padding: 30rpx;
		box-shadow: 0 0 5px 1px rgba($color: #000000, $alpha: 0.1);
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		
		.image-card-image {
			width: 100%;
			height: 200rpx;
			image {
				width: 100%;
				height: 100%;
				border-radius: 10rpx;
			}
		}
		
		.image-card-desc {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.image-card-desc-title {
				padding: 30rpx 0;
				text {
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
				}
			}
			
			.image-card-desc-info {
				display: flex;
				justify-content: space-between;
				align-items: center;
				
				.image-card-desc-info-tip {
					font-size: 24rpx;
					padding: 3px 5px;
					color: $them-color;
					border: 1px solid $them-color;
					border-radius: 3px;
				}
			}
		}
	}
	
	
</style>
