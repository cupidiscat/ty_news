<template>
	<view class="detail">
		<view class="detail-title">
			{{articleDetail.title}}
		</view>
		<view class="detail-header">
			<div class="detail-header-icon">
				<image :src="articleDetail.author.avatar"></image>
			</div>
			<div class="detail-header-info">
				<view class="detail-header-info-name">{{articleDetail.author.author_name}}</view>
				<view class="detail-header-info-detail">
					<view>{{articleDetail.create_time}}</view>
					<view>{{articleDetail.browse_count}} 浏览</view>
					<view>{{articleDetail.comments_count}}赞</view>
				</view>
			</div>
		</view>
		<view class="detail-content">
			<parse :content="articleDetail.content"></parse>
		</view>
		<view class="detail-bottom">
			<view class="detail-bottom-input" @click="showCommentView">
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
		<uni-popup type="bottom" ref="popup">
			<view class="comment">
				<view class="comment-header">
					<view @click="close">取消</view>
					<view @click="publish">发布</view>
				</view>
				<view class="comment-content">
					<textarea class="comment-content-textarea" placeholder="请输入评论内容" maxlength="200" v-model="commentsValue" >
						
					</textarea>
					<view class="comment-content-num">{{commentsValue.length}}/200</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import parse from "../../components/gaoyia-parse/parse.vue"
	import uniPopup from "../../components/uni-popup/uni-popup.vue"
	
	export default {
		data() {
			return {
				id: "",
				articleDetail: {},
				commentsValue: ""
			}
		},
		components: {
			parse,
			uniPopup
		},
		onLoad(option) {
			this.id = option.id;
			this.getArticleDetail()
		},
		methods: {
			getArticleDetail() {
				this.$api.get_detail({
					article_id: this.id
				}).then(res => {
					console.log(res)
					this.articleDetail = res.data
				})
			},
			showCommentView() {
				this.$refs.popup.open()
			},
			publish() {
				if(this.commentsValue.length === 0) {
					uni.showToast({
						title: "请输入评论的内容"
					})
					return
				}
				this.$api.update_comment({
					article_id: this.id,
					content: this.commentsValue
				}).then(res => {
					console.log(res)
				})
			},
			close() {
				this.$refs.popup.close()
			}
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
			// border: 1px solid red;
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
		
		.comment {
			background-color: #FFFFFF;
			padding: 0 15px;
			.comment-header {
				display: flex;
				justify-content: space-between;
				padding: 15px 0;
				view:nth-child(1) {
					color: #666;
				}
				view:nth-child(2) {
					color: #007AFF;
				}
			}
			.comment-content {
				.comment-content-textarea {
					border: 1px solid #eeeeee;
					height: 400rpx;
					width: 100%;
				}
				.comment-content-num {
					padding: 15px 0;
					display: flex;
					justify-content: flex-end;
					color: #333333;
				}
			}
			
		}
		
	}
	
</style>
