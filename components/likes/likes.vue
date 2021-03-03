<template>
	<view class="likes" @click.stop="likeClick">
		<uni-icons color="#f07373" size="20" :type="isLike?'heart-filled':'heart'"></uni-icons>
	</view>
</template>

<script>
	import uniIcons from '../../uni_modules/uni-icons/components/uni-icons/uni-icons.vue'
	
	export default {
		data() {
			return {
				isLike: false
			};
		},
		props: {
			ite: {
				type: Object,
				default() {
					return {}
				}
			},
			msg: {
				type: String,
				default: "ceshi"
			}
		},
		// watch: {
		// 	ite(newValue) {
		// 		console.log(newValue)
		// 	}
		// },
		mounted() {
			this.isLike = this.ite.is_like
		},
		components: {
			uniIcons
		},
		methods: {
			likeClick() {
				console.log("点击了喜欢",this.ite)
				this.isLike = !this.isLike
				uni.showLoading({
					title: "加载中"
				})
				this.$api.update_like({
					user_id: "6039a1f05fd57200010144d5",
					article_id: this.ite._id
				}).then(res=>{
					uni.hideLoading()
					uni.showToast({
						title: this.isLike ? "收藏成功" : "取消收藏"
					})
					console.log(res)
				}).catch(err => {
					uni.hideLoading()
				})
			}
		},
		created() {
			console.log("页面创建了")
		}
	}
</script>

<style lang="scss">
	
	.likes {
		width: 40rpx;
		height: 40rpx;
		// border: 1px solid #ff0000;
		display: flex;
		align-items: center;
		justify-content: center;
	}

</style>
