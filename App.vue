<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import '/common/iconfonts/iconfonts.css';
	@import '/style/base.scss';
	
	/* 在APP.vue中引入，否则样式不能生效 */
	@import "/components/gaoyia-parse/parse.css";
</style>
