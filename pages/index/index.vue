<template>
	<view class="content">
		<view id="main_grid">
			<navigator id="grid-item" v-for="(item) in goodsList" :url="`/pages/goodsPages/goodsPages?number=${item.number}&name=${item.name}&quantity=${item.quantity}`">
					<image :src="item.url" class="image" mode="aspectFit" style="height: 50%;width: 60%;margin-top:10px;"/>
					<view class="">
						货物编号：{{item.number}} 
					</view>
					<view class="">
						货物名称：{{item.name}}
					</view>
					<view class="">
						货物余量：{{item.quantity}}
				</view>
			</navigator>
			<navigator url=""></navigator>
		</view>
		<view class="">
			<button @click="publishMessage">Publish Message</button>
		</view>
		<view class="">
			<button @click="test">跳转</button>
		</view>
<!-- 		<van-button type="primary">按钮</van-button>
		<van-grid>
			<van-grid-item icon="photo-o" text="文字" />
			<van-grid-item icon="photo-o" text="文字" />
			<van-grid-item icon="photo-o" text="文字" />
			<van-grid-item icon="photo-o" text="文字" />
		</van-grid> -->
	</view>
</template>

<script>
	// import mqttClient from '@/pages/mqttService.js';
	export default {
		data() { 
			return {
				number:0,
				message:'Hello MQTT',
				MQTT_received:'',
				goodsList:[
					{
						number:0,
						url:'/static/logo.png',
						name:'货物0',
						quantity:0.30
					},
					{
						number:1,
						url:'/static/logo.png',
						name:'货物1',
						quantity:0.87
					},
					{
						number:2,
						url:'/static/logo.png',
						name:'货物2',
						quantity:0.87
					},
					{
						number:3,
						url:'/static/logo.png',
						name:'货物3',
						quantity:0.87
					},
					{
						number:4,
						url:'/static/logo.png',
						name:'货物4',
						quantity:0.87
					},
					{
						number:5,
						url:'/static/logo.png',
						name:'货物5',
						quantity:0.87
					},
					{
						number:6,
						url:'/static/logo.png',
						name:'货物6',
						quantity:0.87
					},
					{
						number:7,
						url:'/static/logo.png',
						name:'货物7',
						quantity:0.87
					},
					{
						number:8,
						url:'/static/logo.png',
						name:'货物8',
						quantity:0.87
					},
					{
						number:9,
						url:'/static/logo.png',
						name:'货物9',
						quantity:0.87
					},
					{
						number:10,
						url:'/static/logo.png',
						name:'货物10',
						quantity:0.87
					},
					{
						number:11,
						url:'/static/logo.png',
						name:'货物11',
						quantity:0.87
					},
					{
						number:12,
						url:'/static/logo.png',
						name:'货物12',
						quantity:0.87
					},
					{
						number:13,
						url:'/static/logo.png',
						name:'货物13',
						quantity:0.87
					},
					{
						number:14,
						url:'/static/logo.png',
						name:'货物14',
						quantity:0.87
					},
				]
				
			}
		},
		mounted() {
			this.initSerialPort();
		},
		onLoad() {
			
		},
		mounted(){
		    // mqttClient.subscribe('testtopic/9960', (err) => {
		    //   if (err) {
		    //     console.error('Subscribe error: ', err);
		    //   } else {
		    //     console.log('Subscribed to topic successfully');
		    //   }
		    // })
		},
		methods: {
			test(){
				console.log("进入成功");
				uni.navigateTo({
					url:"/pages/test/test"
				})
			},
			// publishMessage() {
			//   console.log("已执行");
			//   mqttClient.publish('testtopic/9960', this.message, {}, (err) => {
			//     if (err) {
			//       console.error('Publish error: ', err);
			//     } else {
			//       console.log('Message published successfully');
			//     }
			//   });
			// },
			
			initSerialPort() {
				const serialPort = uni.requireNativePlugin('Fvv-UniSerialPort');
				serialPort.getAllDeviceList(res => {
			    console.log(res); // 打印设备列表
				});
				serialPort.getAllDevicePath(res => {
			    console.log(res); // 打印路径列表
				});
				serialPort.setPath('/dev/ttyS1');
				serialPort.setBaudRate(9600);
				serialPort.open(res => {
					console.log(res); // 打开串口连接
				});
			},
			monitoringSerialPort_HEX(){ //接收字节串口信息
				const serialPort = uni.requireNativePlugin('Fvv-UniSerialPort');
				serialPort.onMessage(rec => {
					console.log(rec); // 打印接收到的信息
					this.temp = rec; 
				});
			},
			sendSerialPortMessage_HEX(e){//发送字节串口信息
				const serialPort = uni.requireNativePlugin('Fvv-UniSerialPort');
				serialPort.sendBytes('e')
			}
		}
	}
</script>

<style>
	#main_grid {
		display: grid;
		grid-template-columns:repeat(auto-fit,minmax(150px,1fr));
		width: 90vw;
		margin-top: 5vw;
		gap:5px
	}
	#grid-item {
		border: 1px solid rgba(0, 0, 0, 0.8);
		text-align: center;
		width: 150px;
		height: 180px;
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
