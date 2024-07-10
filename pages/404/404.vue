<template>
	<view>
		404,本页面未找到
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad(){
			let timer=setTimeout(()=>{
				clearTimeout(timer)
				uni.navigateTo({
					url:'/pages/index/index'
				})
			},5000)
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
