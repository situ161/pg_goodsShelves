<template>
	<view>
		<view class="">
			货物编号：{{this.goodsNumber}}
		</view>
		<view class="">
			货物名称：{{this.goodsName}}
		</view>
		<view class="">
			货物余量：{{this.goodsQuantity}}
		</view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				goodsName:String,
				goodsNumber:Number,
				goodsQuantity:Number,
			}
		},
		mounted() {
			
			
		},
		onLoad(options) {
			console.log(options);
			this.goodsNumber=options.number
			this.goodsName=options.name
			this.goodsQuantity=options.quantity
			// if(options.goodsList&&options.number){
			// 	this.goodsList = JSON.parse(decodeURIComponent(options.goodsList));
			// 	this.number = JSON.parse(decodeURIComponent(options.number));
			// 	console.log(typeof options.goodsList);
			// 	console.log(this.goodsList);
			// 	console.log(this.goodsList[this.number]);
			// 	console.log(typeof this.number);
			// 	console.log(typeof this.goodsList);
			// }
		},
		methods: {

		}
	}
</script>

<style>

</style>
