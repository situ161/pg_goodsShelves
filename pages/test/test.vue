<template>
  <view>
    <input type="text" @input="onKeyInput" />
    <button @click="publishMessage">发送</button>
  </view>
  <view class="">
    接收的内容：{{ received_message }}
  </view>
</template>

<script>
  import mqttClient from '@/pages/mqttService.js';

  export default {
    data() {
      return {
        message: '你好哇',
        inputValue: '',
        received_message: ''
      };
    },
    methods: {
      onKeyInput(e) {
        this.inputValue = e.detail.value;
      },
      gotopage() {
        console.log("进入成功");
      },
      publishMessage() {
        console.log("已执行");
        mqttClient.publish('testtopic/734220427', this.inputValue, {}, (err) => {
          if (err) {
            console.error('Publish error: ', err);
          } else {
            console.log('Message published successfully');
          }
        });
      }
    },
    mounted() {
      mqttClient.subscribe('testtopic/734220427', (err) => {
        if (err) {
          console.error('Subscribe error: ', err);
        } else {
          console.log('Subscribed to topic successfully');
        }
      });
      mqttClient.on('message', (topic, message) => {
        console.log(`Received message: ${message.toString()} from topic: ${topic}`);
        this.received_message = message.toString();
        console.log(this.received_message);
      });
    }
  };
</script>


