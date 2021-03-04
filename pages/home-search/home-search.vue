<template>
	<view class="search">
		<navbar :hasBackIcon="true" :value="value" @change="change"></navbar>
		<uni-load-more v-if="loading" status="loading" iconType="snow" ></uni-load-more>
		
		<view v-if="articleList.length === 0 && value.length == 0" class="search_history">
			<view class="search_history_header">
				<view>历史记录</view>
				<view>清空</view>
			</view>
			<scroll-view v-if="$store.state.historyLists.length>0" scroll-y="true" class="search_history_list">
				<view class="search_history_list_content">
					<view 
					class="search_history_list_content_item"
					v-for="item in $store.state.historyLists"
					@click="itemClick(item)"
					>
						{{item}}
					</view>
				</view>
			</scroll-view>
			<view v-else class="search_history_nodata">
				暂无搜索记录
			</view>
		</view>
		<scroll-view v-else-if="articleList.length > 0" scroll-y="true" class="search_article_scroll">
			<view>
				<list-card 
				v-for="item in articleList" 
				:model="item"
				@clickCard="clickCard"
				>
				</list-card>
				<view class="bottom_line"></view>
			</view>
		</scroll-view>
		<view v-else-if="articleList.length === 0 && value.length !== 0 && !loading" class="article_list_no_data">
			没有任何数据
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				articleList: [],
				value:'',
				loading: false
			}
		},
		methods: {
			change(value) {
				this.value = value
				if (!value) {
					this.articleList = []
					this.loading = false
					this.timer && clearTimeout(this.timer)
					return
				}
		
				if (this.timer) {
					clearTimeout(this.timer);
				}
				
				this.loading = true;
				this.articleList = []
				this.timer = setTimeout(()=>{
					this.getArticleData(value)
				},1000);
			},
			add() {
				this.$store.dispatch("addHistoryList", "添加")
			},
			getArticleData(value) {
				this.loading = true
				console.log("刷新页面")
				this.articleList = []
				this.$api.get_search({
					value
				}).then(res => {
					console.log(res)
					this.loading = false
					this.articleList = res.data
				}).catch(err=>{
					this.loading = false
				})
			},
			clickCard() {
				console.log("添加记录")
				this.$store.dispatch("addHistoryList", this.value)
			},
			itemClick(item) {
				console.log(item)
				this.value = item
				this.change(item)
			}
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
		.search_history {
			flex: 1;
			display: flex;
			flex-direction: column;
			overflow: hidden;
			.search_history_header {
				padding: 0 15px;
				height: 50px;
				line-height: 50px;
				display: flex;
				justify-content: space-between;
				background-color: #FFFFFF;
				view:nth-child(1) {
					color: #007AFF;
				}
				view:nth-child(2) {
					color: $them-color;
					font-weight: bold;
				}
			}
			.search_history_list {
				flex: 1;
				// border: 5px solid red;
				box-sizing: border-box;
				overflow: hidden;
				.search_history_list_content {
					display: flex;
					flex-wrap: wrap;
					background-color: #FFFFFF;
					padding: 0 15px;
					.search_history_list_content_item {
						padding: 3px 8px;
						font-size: 15px;
						border: 1px solid #333333;
						color: #333333;
						border-radius: 5px;
						margin-right: 10px;
						margin-bottom: 10px;
					}
				}
			}
			.search_history_nodata {
				background-color: #FFFFFF;
				height: 200px;
				line-height: 200px;
				text-align: center;
			}
		}
		
		.search_article_scroll {
			background-color: #FFFFFF;
			// border: 5px solid red;
			box-sizing: border-box;
			flex: 1;
			overflow: hidden;
			.bottom_line {
				height: 30px;
			}
		}
		
		.article_list_no_data {
			background-color: #FFFFFF;
			height: 400px;
			line-height: 400px;
			text-align: center;
		}
	}
	
</style>
