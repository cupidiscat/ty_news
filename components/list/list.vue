<template>
	<swiper class="swiper" @change="change" :current="showIndex">
		<swiper-item 
		class="swiper-item"
		v-for="item in list"
		:key="item.id"
		>
			<list-item></list-item>
		</swiper-item>
	</swiper>
</template>

<script>
	import listItem from './list-item.vue'
	export default {
		data() {
			return {
				
			}
		},
		components: {
			listItem
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
		methods: {
			change(event) {
				// console.log(event)
				const { current } = event.detail
				this.$emit("change", current)
			}
		}
	}
</script>

<style lang="scss">
	
	.swiper {
		height: 100%;
		// background-color: #007AFF;
		.swiper-item {
			width: 100%;
			height: 100%;
		}
	}
	
</style>
