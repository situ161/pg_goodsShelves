<script>
	// import { defineConfig } from 'vite';
	export default {
		onLaunch: function() {
			console.log('App Launch');
			uni.navigateTo({
				url:'/pages/login/login'
			})
			

		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		onPageNotFound(){
			uni.navigateTo({
				url:'/pages/404/404'
			})
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
