<template>
	<view class="label">
		<view class="label_my">
			<view class="label_my_header">
				<view>我的标签</view>
				<view @click="clickEdit">{{isEdit?"完成":"编辑"}}</view>
			</view>
			<view class="label_my_content">
				<view 
				class="label_my_content_item"
				v-for="(item, index) in myLabelList"
				:key="item._id"
				>
					{{item.name}}
					<uni-icons 
					v-if="isEdit"
					class="label_my_content_item_clear" 
					type="clear" color="red" size="20"
					@click="delLabel(index)"
					></uni-icons>
				</view>
			</view>
			<uni-load-more v-if="Loading" iconType="snow" status="loading"></uni-load-more>
			<view v-if="myLabelList.length === 0 && !Loading" class="nodata">暂无数据</view>
		</view>
		
		<view class="label_my label_recommand">
			<view class="label_my_header">
				<view>标签推荐</view>
			</view>
			<view class="label_my_content">
				<view 
				class="label_my_content_item"
				v-for="(item, index) in allLabelList"
				:key="item._id"
				@click="addLabel(index)"
				>
					{{item.name}}
				</view>
			</view>
			<uni-load-more v-if="Loading" iconType="snow" status="loading"></uni-load-more>
			<view v-if="allLabelList.length === 0 && !Loading" class="nodata">暂无数据</view>
		</view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				isEdit: false,
				myLabelList: [],
				allLabelList: [],
				Loading: true
			}
		},
		onLoad() {
			this.getLabelList()
		},
		methods: {
			clickEdit() {
				this.isEdit = !this.isEdit
				if(!this.isEdit) {
					let list = this.myLabelList.map(item => {
						return item._id
					})
					console.log("选择的id列表", list)
					this.updateLabel(list)
				}
			},
			getLabelList() {
				this.Loading = true
				this.$api.get_label({
					type: "all"
				})
				.then(res => {
					console.log(res)
					const { data } = res
					this.myLabelList = data.filter(item => item.current)
					this.allLabelList = data.filter(item => !item.current)
					this.Loading = false
				})
			},
			addLabel(index) {
				if(!this.isEdit) {
					return
				}
				this.myLabelList.push(this.allLabelList[index])
				this.allLabelList.splice(index, 1)
			},
			delLabel(index) {
				if(!this.isEdit) {
					return
				}
				this.allLabelList.push(this.myLabelList[index])
				this.myLabelList.splice(index, 1)
			},
			updateLabel(list) {
				uni.showLoading()
				this.$api.update_label({
					label: list
				}).then(res => {
					console.log(res)
					uni.hideLoading()
					uni.showToast({
						title:"更新成功"
					})
					uni.$emit("labelChange")
				}).catch(err => {
					console.log(err)
					uni.hideLoading()
				})
			}
		}
	}
</script>

<style lang="scss">
	
	page {
		background-color: #f5f5f5;
	}
	
	.label {
		.label_my {
			background-color: #FFFFFF;
			padding: 0 15px;
			font-size: 15px;
			.label_my_header {
				display: flex;
				justify-content: space-between;
				padding: 15px 0;
				border-bottom: 1px solid #eeeeee;
				view:nth-child(2) {
					color: #4CD964;
					font-weight: bold;
				}
			}
			.label_my_content {
				display: flex;
				flex-wrap: wrap;
				padding-bottom: 15px;
				.label_my_content_item {
					padding: 5px 15px;
					color: #333333;
					border: 1px solid #333333;
					border-radius: 3px;
					text-align: center;
					margin-right: 10px;
					margin-top: 10px;
					position: relative;
					.label_my_content_item_clear {
						position: absolute;
						top: -3px;
						right: -3px;
					}
				}
			}
		}
		
		.label_recommand {
			margin-top: 15px;
			
			.label_my_header {
				view:nth-child(1) {
					color: red;
					font-weight: bold;
				}
			}
		}
	}
	
	.nodata {
		padding: 50px 0;
		width: 100%;
		text-align: center;
		font-size: 15px;
		color: #333333;
	}

</style>
