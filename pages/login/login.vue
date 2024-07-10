<template>
	<view>
		<!-- 页面其它组件 -->
		    <view class="container">
		        <view class="login-wrapper">
		            <view class="header">平高智能货柜平台</view>
		            <view class="form-wrapper">
		                <input type="text" name="username" placeholder="请输入用户名" class="input-item">
		                <input type="password" name="password" placeholder="请输入密码" class="input-item">
		                <view class="btn" @click="goto_index">Login</view>
		            </view>
		            <view class="msg">
		                其他登录方式
						<uni-row> 
							<uni-col class="" :span="8">IC卡登录</uni-col>
							<uni-col class="" :span="8">人脸识别</uni-col>
							<uni-col class="" :span="8">指纹识别</uni-col>
						</uni-row>
		            </view>
		        </view>
		    </view>
<!-- 		<view class="">
			<view class="">
				<text>平高智能料库货柜</text>
				<uni-form>
					<uni-forms-item label="用户名">
						<uni-easyinput type="text" placeholder="请输入用户名" />
					</uni-forms-item>
					<uni-forms-item label="密码">
						<uni-easyinput type="text" placeholder="请输入密码" />
					</uni-forms-item>
					<button @click="goto_index">登录</button>
				</uni-form>
			</view>
		</view> -->
		<!-- 页面其它组件 -->
	</view>
</template>
<script>
	// import uniforms from "/uni_modules/uni-forms/components/uni-forms/uni-forms.vue"
	// import uniformsitem from "/uni-modules/uni-forms/components/uni-forms/uni-forms.vue"
	/* import 导入的其它组件 */
	export default {
		data() {
			return {
				/* ... */ }
		},
		
		onLoad() {
			const serialPort = uni.requireNativePlugin('Fvv-UniSerialPort')
			serialPort.getAllDeviceList(res => {
			    console.log(res) //设备列表
			})
			serialPort.getAllDevicePath(res => {
			    console.log(res) //路径列表
			})
			serialPort.open(res => {
			    console.log(res) 
			})
			serialPort.setPath('/dev/ttyS1')
			serialPort.setBaudRate(9600)
			serialPort.open(res => {
			    console.log(res) 
			})
			serialPort.onMessageASCII(rec => { //(去掉;符号)
			    console.log(rec)
			},send => {
			    console.log(send)
			})
		},
		methods:{
			goto_index(){
				uni.switchTab({
					url:'/pages/index/index'
				})
			}
		},
		components: {
			/* 其它组件定义 */
		}
	}
</script>
<style>
        * {
            margin: 0;
            padding: 0;
        }
        html {
            height: 100%;
			width: 100%;
        }
        body {
            height: 100%;
			width: 100%;
        }
        .container {
			min-height: 100vh;
            height: 100%;
			width: 100%;
            background-image: linear-gradient(to right, #fbc2eb, #a6c1ee);
			display: flex; 
			justify-content: center; 
			align-items: center;
        }
        .login-wrapper {
			background-color: #fff;
            width: 60%;
            height: 80%;
            border-radius: 15px;
            padding: 0 50px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .header {
            font-size: 50rpx;
            font-weight: bold;
            text-align: center;
			line-height: 100px;
        }
        .input-item {
            display: block;
            width: 100%;
            margin-bottom: 20px;
            border: 0;
            padding: 10px;
            border-bottom: 1px solid rgb(128, 125, 125);
            font-size: 15px;
            outline: none;
        }
        .input-item:placeholder {
            text-transform: uppercase;
        }
        .btn {
            text-align: center;
            padding: 10px;
            width: 100%;
            margin-top: 40px;
            background-image: linear-gradient(to right, #a6c1ee, #fbc2eb);
            color: #fff;
        }
        .msg {
            text-align: center;
            line-height: 50px;
			width: 100%;
        }
        a {
            text-decoration-line: none;
            color: #abc1ee;
        }
</style>