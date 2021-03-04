<template>
	<view class="search">
		<navbar :hasBackIcon="true"></navbar>
		<view class="search_history">
			<view class="search_history_header">
				<view>历史记录</view>
				<view>清空</view>
			</view>
			<scroll-view class="search_history_content" scroll-y="true">
				<view class="search_history_content_list">
					<view class="search_history_content_item" v-for="item in 30">
						{{item}}的内容
					</view>
				</view>
			</scroll-view>
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
	
	page {
		height: 100%;
	}
	
	.search {
		height: 100%;
		background-color: #f5f5f5;
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		.search_history {
			flex: 1;
			display: flex;
			flex-direction: column;
			overflow: hidden;
			.search_history_header {
				background-color: #FFFFFF;
				display: flex;
				justify-content: space-between;
				padding: 0 15px;
				height: 50px;
				line-height: 50px;
				view:nth-child(1) {
					color: #007AFF;
				}
				view:nth-child(2) {
					color: $them-color;
					font-weight: bold;
				}
			}
			.search_history_content {
				flex: 1;
				box-sizing: border-box;
				overflow: hidden;
				.search_history_content_list {
					background-color: #FFFFFF;
					display: flex;
					flex-wrap: wrap;
					padding: 0px 15px 15px;
					.search_history_content_item {
						padding: 5px 10px;
						font-size: 15px;
						color: #333333;
						border: 1px solid #333333;
						text-align: center;
						border-radius: 5px;
						margin-right: 10px;
						margin-bottom: 10px;
					}
				}
					
			}
		}
	}
	
	
</style>
