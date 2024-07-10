<template>
	<view>
		用户信息
		<button @click="logout">注销登录</button>
		<button @click="goto_test">进入串口测试页</button>
		<button @click="face_create"></button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			logout(){
				uni.navigateTo({
					url:'/pages/login/login'
				})
			},
			goto_test(){
				uni.navigateTo({
					url:'/pages/chuankou_test/chuankou_test'
				})
			},
			face_create(){
				uni.navigateTo({
					url:"/pages/faceCreate/faceCreate"
				})
			}
			
		}
	}
</script>

<style>

</style>
