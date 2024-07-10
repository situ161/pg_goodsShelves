<template>
  <div>
    <h1>串口测试页</h1>
    <div>{{ temp }}</div>
    <button @click="sendmsg">发送信息</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      temp: ''
    };
  },
  mounted() {
    // 组件挂载到 DOM 后立即调用此方法
    this.initSerialPort();
  },
  beforeUnmount() {
    // 组件卸载前调用此方法，确保关闭串口连接
    this.closeSerialPort();
  },
  methods: {
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
      
      // 监听串口信息
      serialPort.onMessageASCII(rec => {
        console.log(rec); // 打印接收到的信息
        this.temp = rec; // 更新组件数据，触发视图更新
      });
    },
    closeSerialPort() {
      const serialPort = uni.requireNativePlugin('Fvv-UniSerialPort');
      serialPort.close(res => {
        console.log('Serial port closed:', res); // 关闭串口连接
      });
    },
    sendmsg() {
      const serialPort = uni.requireNativePlugin('Fvv-UniSerialPort');
      serialPort.sendASCII("hello Fvv"); // 发送信息到串口
    }
  }
};
</script>

<style scoped>
/* 样式代码 */
</style>
