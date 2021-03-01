<template>
	<swiper class="swiper" @change="change" :current="showIndex">
		<swiper-item class="swiper-list" v-for="(item, index) in list">
			<list-item class="swiper-item"></list-item>
		</swiper-item>
	</swiper>
</template>

<script>
	import listItem from './listItem.vue'
	
	export default {
		data() {
			return {
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
		components: {
			listItem
		},
		methods: {
			change(event) {
				const { current } = event.detail
				this.$emit("change", current)
			}
		}
	}
</script>

<style lang="scss">
	
	.swiper {
		height: 100%;
		.swiper-list {
			width: 100%;
			height: 100%;
			.swiper-item {
				box-sizing: border-box;
			}
		}
	}
	
</style>
