<template>
	<view class="detail">
		<view class="detail-title">
			我是一个前端开发者，我们要不要学习nodeJs?
		</view>
		<view class="detail-header">
			<div class="detail-header-icon">
				<image src="../../static/logo.png"></image>
			</div>
			<div class="detail-header-info">
				<view class="detail-header-info-name">cupidis</view>
				<view class="detail-header-info-detail">
					<view>2020-3-4 22:04</view>
					<view>1234浏览</view>
					<view>73赞</view>
				</view>
			</div>
		</view>
		<view class="detail-content">
			文章详情
		</view>
		<view class="detail-bottom">
			<view class="detail-bottom-input">
				<text>谈谈你的看法</text>
				<uni-icons type="compose" color="#F07373" size="22"></uni-icons>
			</view>
			<view class="detail-bottom-icons">
				<view class="detail-bottom-icons-item">
					<uni-icons type="chat" size="22" color="#F07373"></uni-icons>
				</view>
				<view class="detail-bottom-icons-item">
					<uni-icons type="heart" size="22" color="#F07373"></uni-icons>
				</view>
				<view class="detail-bottom-icons-item">
					<uni-icons type="hand-thumbsup" size="22" color="#F07373"></uni-icons>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	
	.detail {
		padding-bottom: 54px;
		position: relative;
		.detail-title {
			padding: 10px 15px;
			font-size: 22px;
			font-weight: bold;
			color: #333333;
		}
		.detail-header {
			padding: 10px 15px;
			display: flex;
			.detail-header-icon {
				width: 40px;
				height: 40px;
				border-radius: 30px;
				overflow: hidden;
				flex-shrink: 0;
				image {
					width: 100%;
					height: 100%;
				}
			}
			.detail-header-info {
				flex: 1;
				margin-left: 10px;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				.detail-header-info-name {
					color: #333333;
					font-size: 15px;
				}
				.detail-header-info-detail {
					display: flex;
					font-size: 12px;
					color: #999999;
					view {
						margin-right: 10px;
					}
				}
			}
		}
		.detail-content {
			padding: 10px 15px;
			border: 1px solid red;
			height: 1000px;
		}
		.detail-bottom {
			position: fixed;
			left: 0;
			bottom: 0;
			right: 0;
			height: 54px;
			background-color: #FFFFFF;
			border-top: 1px solid #cccccc;
			box-sizing: border-box;
			display: flex;
			padding-left: 15px;
			.detail-bottom-input {
				flex: 1;
				display: flex;
				justify-content: space-between;
				height: 30px;
				margin-top: 12px;
				border: 1px solid #cccccc;
				font-size: 15px;
				color: #999999;
				align-items: center;
				padding: 0 15px;
			}
			
			.detail-bottom-icons {
				display: flex;
				padding: 0 10px;
				
				.detail-bottom-icons-item {
					width: 40px;
					display: flex;
					align-items: center;
					justify-content: center;
				}
			}
		}
	}
	
</style>
